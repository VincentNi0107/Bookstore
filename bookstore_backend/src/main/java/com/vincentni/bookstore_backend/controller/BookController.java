package com.vincentni.bookstore_backend.controller;

import com.vincentni.bookstore_backend.dto.NewBookDTO;
import com.vincentni.bookstore_backend.dto.NewOrderDTO;
import com.vincentni.bookstore_backend.entity.Book;
import com.vincentni.bookstore_backend.service.BookService;
import com.vincentni.bookstore_backend.utils.msgutils.Msg;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class BookController {

    @Autowired
    private BookService bookService;

    @RequestMapping("/getBooks")
    public List<Book> getBooks() {
        System.out.println("getBooks");
        return bookService.getBooks();
    }

    @RequestMapping("/getBook")
    public Book getBook(@RequestParam("bookId") Integer bookId){
        System.out.println("getBook");
        return bookService.findBookById(bookId);
    }

    @RequestMapping("/addBook")
    public Msg addBook(@RequestBody NewBookDTO newBookDTO){
        System.out.println("addBook");
        return bookService.addBook(newBookDTO);
    }

    @RequestMapping("/deleteBook")
    public Msg deleteBook(@RequestParam("bookId") Integer bookId){
        System.out.println("deleteBook");
        return bookService.deleteBook(bookId);
    }

    @RequestMapping("/editBook")
    public Msg editBook(@RequestBody NewBookDTO newBookDTO){
        System.out.println("editBook");
        return bookService.editBook(newBookDTO);
    }
}
