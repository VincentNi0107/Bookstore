package com.vincentni.bookstore_backend.service;

import com.vincentni.bookstore_backend.dto.NewBookDTO;
import com.vincentni.bookstore_backend.entity.Book;
import com.vincentni.bookstore_backend.utils.msgutils.Msg;

import java.util.List;

public interface BookService {

    Book findBookById(Integer id);
    List<Book> getBooks();

    Msg addBook(NewBookDTO newBookDTO);

    Msg deleteBook(Integer bookId);

    Msg editBook(NewBookDTO newBookDTO);

}
