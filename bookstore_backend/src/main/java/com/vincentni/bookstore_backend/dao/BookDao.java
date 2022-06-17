package com.vincentni.bookstore_backend.dao;

import com.vincentni.bookstore_backend.entity.Book;

import java.util.List;

public interface BookDao {
    Book findOne(Integer id);
    List<Book> getBooks();
    void saveBook(Book book);
    void delete(Integer bookId);
}
