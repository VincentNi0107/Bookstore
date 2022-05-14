package com.vincentni.bookstore_backend.daoimpl;

import com.vincentni.bookstore_backend.dao.OrderDao;
import com.vincentni.bookstore_backend.dto.OrderInfo;
import com.vincentni.bookstore_backend.entity.CartItem;
import com.vincentni.bookstore_backend.entity.Order;
import com.vincentni.bookstore_backend.entity.OrderItem;
import com.vincentni.bookstore_backend.repository.OrderItemRepository;
import com.vincentni.bookstore_backend.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;

@Repository
public class OrderDaoImpl implements OrderDao {

    @Autowired
    private OrderRepository orderRepository;

    @Autowired
    private OrderItemRepository orderItemRepository;

    @Override
    public List<Order> getOrderByUserId(int userId) {
        return orderRepository.getOrderByUserId(userId);
    }

    @Override
    public List<Order> getAllOrders() {
        return orderRepository.findAll();
    }

    @Override
    public Order saveOrder(Order order) {
        return orderRepository.save(order);
    }

    @Override
    public void saveOrderItem(OrderItem orderItem) {
        orderItemRepository.save(orderItem);
    }

    @Override
    public List<OrderItem> getOrderItemsByOrderId(int orderId) {
        return orderItemRepository.getOrderItemsByOrderId(orderId);
    }

//    @Override
//    public List<OrderInfo> getOrderByUserId(int userId) {
//        List<Order> orderList=orderRepository.getOrderByUserId(userId);
//        return formOrderInfos(orderList);
//    }
//
//    @Override
//    public List<OrderInfo> getOrders() {
//        List<Order> orderList=orderRepository.getOrders();
//        return formOrderInfos(orderList);
//    }
//
//    @Override
//    public void addOrder(int userId,List<CartItem> cartItemList) {
//        Order newOrder=new Order();
//        Timestamp orderTime=new Timestamp(System.currentTimeMillis());
//        newOrder.setOrderTime(orderTime);
//        newOrder.setUserId(userId);
//        Order tmpOrder= orderRepository.save(newOrder);
//        for(CartItem cartItem:cartItemList){
//            OrderItem newOrderItem=new OrderItem();
//            newOrderItem.setOrderId(tmpOrder.getOrderId());
//            newOrderItem.setAmount(cartItem.getAmount());
//            newOrderItem.setBookId(cartItem.getBookId());
//            newOrderItem.setUserId(cartItem.getUserId());
//            orderItemRepository.save(newOrderItem);
//        }
//    }
//
//    private List<OrderInfo> formOrderInfos(List<Order> orderList) {
//        List<OrderInfo> orderInfoList=new ArrayList<>();
//        for(Order order:orderList){
//            OrderInfo orderInfo=new OrderInfo();
//            orderInfo.setOrderId(order.getOrderId());
//            orderInfo.setOrderTime(order.getOrderTime());
//            orderInfo.setUserId(order.getUserId());
//            orderInfo.setOrderItemList(orderItemRepository.getOrderItems(order.getOrderId()));
//            orderInfoList.add(orderInfo);
//        }
//        return orderInfoList;
//    }
}
