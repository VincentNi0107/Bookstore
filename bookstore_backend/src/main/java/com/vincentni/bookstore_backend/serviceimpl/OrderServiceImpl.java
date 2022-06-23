package com.vincentni.bookstore_backend.serviceimpl;

import com.vincentni.bookstore_backend.constant.Constant;
import com.vincentni.bookstore_backend.dao.BookDao;
import com.vincentni.bookstore_backend.dao.CartDao;
import com.vincentni.bookstore_backend.dao.OrderDao;
import com.vincentni.bookstore_backend.dao.UserDao;
import com.vincentni.bookstore_backend.dto.GetOrderDTO;
import com.vincentni.bookstore_backend.dto.NewOrderDTO;
import com.vincentni.bookstore_backend.entity.Book;
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
import java.util.Objects;

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
        JSONObject auth = SessionUtil.getAuth();
        if(auth != null){
            Order newOrder = new Order();
            Timestamp orderTime = new Timestamp(System.currentTimeMillis());
            newOrder.setTime(orderTime);
            newOrder.setUser(userDao.getUserById(auth.getInt(Constant.USER_ID)));
            List<OrderItem> orderItemList = new LinkedList<>();
            for (NewOrderDTO.OrderItem orderItem: newOrderDTO.getOrderItemList()) {
                OrderItem newOrderItem = new OrderItem();
                Book book = bookDao.findOne(orderItem.getBookId());
                int newInventory=book.getInventory()-orderItem.getBookNumber();
                if(newInventory < 0) continue;
                book.setInventory(newInventory);
                newOrderItem.setBook(book);
                newOrderItem.setBookNumber(orderItem.getBookNumber());
                newOrderItem.setPrice(book.getPrice());
                newOrderItem.setOrder(newOrder);
                orderItemList.add(newOrderItem);
                bookDao.saveBook(book);
            }
            newOrder.setOrderItem(orderItemList);
            cartDao.deleteCartByUserId(auth.getInt(Constant.USER_ID));
            if(orderItemList.size() == 0) return newOrder;
            return orderDao.saveOrder(newOrder);
        }
        else {
            return null;
        }
    }


}
