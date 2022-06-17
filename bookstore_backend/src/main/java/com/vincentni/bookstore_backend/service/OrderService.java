package com.vincentni.bookstore_backend.service;
import com.vincentni.bookstore_backend.dto.GetOrderDTO;
import com.vincentni.bookstore_backend.dto.NewOrderDTO;
import com.vincentni.bookstore_backend.entity.Order;

import java.util.List;

public interface OrderService {
    List<GetOrderDTO> getOrder();
    Order addOrder(NewOrderDTO newOrderDTO);
}
