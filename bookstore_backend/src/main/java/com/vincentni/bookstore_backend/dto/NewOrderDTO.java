package com.vincentni.bookstore_backend.dto;
import lombok.*;

import java.util.List;

@Getter
@Setter
public class NewOrderDTO {
    @Getter
    @Setter
    public static class OrderItem{
//        Integer cartItemId;
        Integer bookId;
        Integer bookNumber;
    }

    private Integer userId;
    private List<OrderItem> orderItemList;
}
