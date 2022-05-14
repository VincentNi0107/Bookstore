package com.vincentni.bookstore_backend.repository;
import com.vincentni.bookstore_backend.entity.Book;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface BookRepository extends JpaRepository<Book,Integer> {

    @Query("select b from Book b")
    List<Book> getBooks();
}
