package com.vincentni.bookstore_backend.service;

import com.vincentni.bookstore_backend.entity.Book;

import java.util.List;

public interface BookService {

    Book findBookById(Integer id);
    List<Book> getBooks();
}
