package com.vincentni.bookstore_backend.dto;
import lombok.*;

import java.sql.Timestamp;
import java.util.List;

@Getter
@Setter
public class GetOrderDTO {
    @Getter
    @Setter
    public static class OrderItem{
        String bookName;
        Integer bookNumber;
        Double price;
    }
    private String userName;
    private Timestamp time;
    private List<GetOrderDTO.OrderItem> orderItemList;
}
