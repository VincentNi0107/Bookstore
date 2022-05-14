package com.vincentni.bookstore_backend.dto;
import com.vincentni.bookstore_backend.entity.OrderItem;
import lombok.*;

import java.sql.Timestamp;
import java.util.List;

@Getter
@Setter
public class OrderInfo {
    private Integer orderId;
    private Integer userId;
    private Timestamp orderTime;
    private List<OrderItem> orderItemList;
}
