package com.vincentni.bookstore_backend.serviceimpl;

import com.vincentni.bookstore_backend.dao.BookDao;
import com.vincentni.bookstore_backend.dao.CartDao;
import com.vincentni.bookstore_backend.dao.OrderDao;
import com.vincentni.bookstore_backend.dao.UserDao;
import com.vincentni.bookstore_backend.dto.GetOrderDTO;
import com.vincentni.bookstore_backend.dto.NewOrderDTO;
import com.vincentni.bookstore_backend.entity.Order;
import com.vincentni.bookstore_backend.entity.OrderItem;
import com.vincentni.bookstore_backend.service.OrderService;
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

    private GetOrderDTO convertOrder(Order order){
        GetOrderDTO newGetOrderDto=new GetOrderDTO();
        newGetOrderDto.setUserName(userDao.getUserById(order.getUserId()).getUsername());
        newGetOrderDto.setTime(order.getTime());
        List<GetOrderDTO.OrderItem> getOrderDTOItemList=new LinkedList<>();
        for(OrderItem orderItem:orderDao.getOrderItemsByOrderId(order.getId())){
            GetOrderDTO.OrderItem getOrderDTOItem=new GetOrderDTO.OrderItem();
            getOrderDTOItem.setBookName(bookDao.findOne(orderItem.getBookId()).getBookName());
            getOrderDTOItem.setPrice(orderItem.getPrice());
            getOrderDTOItem.setBookNumber(orderItem.getBookNumber());
            getOrderDTOItemList.add(getOrderDTOItem);
        }
        newGetOrderDto.setOrderItemList(getOrderDTOItemList);
        return newGetOrderDto;
    }
    private List<GetOrderDTO> convertOrderList(List<Order> orderList){
        List<GetOrderDTO> getOrderDTOList=new LinkedList<>();
        for (Order order:orderList){
            getOrderDTOList.add(convertOrder(order));
        }
        return getOrderDTOList;
    }
    @Override
    public List<GetOrderDTO> getOrderByUserId(int userId) {
        return convertOrderList(orderDao.getOrderByUserId(userId));
    }

    @Override
    public List<GetOrderDTO> getAllOrders() {
        return convertOrderList(orderDao.getAllOrders());
    }

    @Override
    @Transactional(propagation = Propagation.REQUIRED)
    public GetOrderDTO addOrder(NewOrderDTO newOrderDTO) {
        Order newOrder = new Order();
        Timestamp orderTime = new Timestamp(System.currentTimeMillis());
        newOrder.setTime(orderTime);
        newOrder.setUserId(newOrderDTO.getUserId());
        Order tmpOrder=orderDao.saveOrder(newOrder);
        Integer newOrderId=tmpOrder.getId();
        System.out.println(newOrderId);
        for (NewOrderDTO.OrderItem orderItem: newOrderDTO.getOrderItemList()) {
            OrderItem newOrderItem = new OrderItem();
            newOrderItem.setBookId(orderItem.getBookId());
            newOrderItem.setBookNumber(orderItem.getBookNumber());
            newOrderItem.setPrice(bookDao.findOne(orderItem.getBookId()).getPrice());
            newOrderItem.setOrderId(newOrderId);
            orderDao.saveOrderItem(newOrderItem);
        }
        cartDao.clearCartByUser(newOrderDTO.getUserId());
        return convertOrder(tmpOrder);
    }


}
