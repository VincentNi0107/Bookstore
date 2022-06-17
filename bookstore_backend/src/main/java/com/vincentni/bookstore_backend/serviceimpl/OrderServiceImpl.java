package com.vincentni.bookstore_backend.serviceimpl;

import com.vincentni.bookstore_backend.constant.Constant;
import com.vincentni.bookstore_backend.dao.BookDao;
import com.vincentni.bookstore_backend.dao.CartDao;
import com.vincentni.bookstore_backend.dao.OrderDao;
import com.vincentni.bookstore_backend.dao.UserDao;
import com.vincentni.bookstore_backend.dto.GetOrderDTO;
import com.vincentni.bookstore_backend.dto.NewOrderDTO;
import com.vincentni.bookstore_backend.entity.Order;
import com.vincentni.bookstore_backend.entity.OrderItem;
import com.vincentni.bookstore_backend.service.OrderService;
import com.vincentni.bookstore_backend.utils.sessionutils.SessionUtil;
import net.sf.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import java.sql.Timestamp;
import java.util.LinkedList;
import java.util.List;
@Service
public class OrderServiceImpl implements OrderService {

    @Autowired
    private OrderDao orderDao;

    @Autowired
    private CartDao cartDao;

    @Autowired
    private BookDao bookDao;
    @Autowired
    private UserDao userDao;

    @Override
    public List<GetOrderDTO> getOrder() {
        JSONObject auth = SessionUtil.getAuth();
        System.out.println("getOrder");
        if(auth != null){
            List<Order> orderList;
            if(auth.getString(Constant.USER_TYPE).equals("admin")){
                orderList=orderDao.getAllOrders();
            }
            else {
                orderList=orderDao.getOrderByUserId(auth.getInt(Constant.USER_ID));
            }
            List<GetOrderDTO> getOrderDTOList=new LinkedList<>();
            for(Order order:orderList){
                getOrderDTOList.add(new GetOrderDTO(order));
            }
            return getOrderDTOList;
        }
        else {
            return null;
        }
    }

    @Override
    @Transactional(propagation = Propagation.REQUIRED)
    public Order addOrder(NewOrderDTO newOrderDTO) {
        Order newOrder = new Order();
        Timestamp orderTime = new Timestamp(System.currentTimeMillis());
        newOrder.setTime(orderTime);
        newOrder.setUser(userDao.getUserById(newOrderDTO.getUserId()));
        List<OrderItem> orderItemList = new LinkedList<>();
        for (NewOrderDTO.OrderItem orderItem: newOrderDTO.getOrderItemList()) {
            OrderItem newOrderItem = new OrderItem();
            newOrderItem.setBook(bookDao.findOne(orderItem.getBookId()));
            newOrderItem.setBookNumber(orderItem.getBookNumber());
            newOrderItem.setPrice(bookDao.findOne(orderItem.getBookId()).getPrice());
            newOrderItem.setOrder(newOrder);
            orderItemList.add(newOrderItem);
        }
        newOrder.setOrderItem(orderItemList);
        cartDao.deleteCartByUserId(newOrderDTO.getUserId());
        return orderDao.saveOrder(newOrder);
    }


}
