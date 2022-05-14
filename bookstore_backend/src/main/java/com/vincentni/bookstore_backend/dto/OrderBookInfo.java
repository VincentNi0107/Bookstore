package com.vincentni.bookstore_backend.dto;
import lombok.*;

import java.sql.Timestamp;

@Getter
@Setter
public class OrderBookInfo {
//    private Integer orderId;
    private Timestamp orderTime;
    private String bookName;
    private Integer amount;
    private Double price;
}
