package com.vincentni.bookstore_backend.dto;
import lombok.*;

import java.util.List;

@Getter
@Setter
public class NewOrderDTO {
    @Getter
    @Setter
    public static class OrderItem{
        Integer bookId;
        Integer bookNumber;
    }
    private List<OrderItem> orderItemList;
}
