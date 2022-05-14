package com.vincentni.bookstore_backend.dto;

import lombok.*;
@Getter
@Setter
public class CartInfo {
    private Integer bookId;
    private String bookName;
    private String imageUrl;
    private Integer amount;
    private String author;
    private Double price;
}
