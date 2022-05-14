package com.vincentni.bookstore_backend.service;
import com.vincentni.bookstore_backend.dto.GetOrderDTO;
import com.vincentni.bookstore_backend.dto.NewOrderDTO;

import java.util.List;

public interface OrderService {
    List<GetOrderDTO> getOrderByUserId(int userId);
    List<GetOrderDTO> getAllOrders();
    GetOrderDTO addOrder(NewOrderDTO newOrderDTO);
}
