package com.vincentni.bookstore_backend.daoimpl;
import com.vincentni.bookstore_backend.dao.BookDao;
import com.vincentni.bookstore_backend.entity.Book;
import com.vincentni.bookstore_backend.repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public class BookDaoImpl implements BookDao {
    @Autowired
    private BookRepository bookRepository;

    @Override
    public Book findOne(Integer id){
        return bookRepository.getOne(id);
    }
    @Override
    public List<Book> getBooks(){
        return bookRepository.findAll();
    }

    @Override
    public void saveBook(Book book) {
        bookRepository.save(book);
    }

    @Override
    public void delete(Integer bookId) {
        bookRepository.deleteById(bookId);
    }
}
