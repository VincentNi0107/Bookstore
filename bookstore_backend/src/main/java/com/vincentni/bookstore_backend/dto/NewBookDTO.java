package com.vincentni.bookstore_backend.dto;

import lombok.Getter;

import java.net.Inet4Address;

@Getter
public class NewBookDTO {
    private Integer bookId;
    private String bookName;
    private String author;
    private String isbn;
    private Integer price;
    private Integer originPrice;
    private String description;
    private String imageUrl;
    private Integer inventory;
}
