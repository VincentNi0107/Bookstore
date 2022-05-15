package com.vincentni.bookstore_backend.dao;

import com.vincentni.bookstore_backend.entity.Order;
import com.vincentni.bookstore_backend.entity.OrderItem;

import java.util.List;

public interface OrderDao {
    List<Order> getOrderByUserId(int userId);
    List<Order> getAllOrders();
    Order saveOrder(Order order);
    void saveOrderItem(OrderItem orderItem);
    List<OrderItem> getOrderItemsByOrderId(int orderId);
}
