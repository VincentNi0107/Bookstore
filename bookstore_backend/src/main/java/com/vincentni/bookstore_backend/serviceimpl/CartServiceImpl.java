package com.vincentni.bookstore_backend.serviceimpl;

import com.vincentni.bookstore_backend.dao.BookDao;
import com.vincentni.bookstore_backend.dao.CartDao;
import com.vincentni.bookstore_backend.dto.CartInfo;
import com.vincentni.bookstore_backend.entity.Book;
import com.vincentni.bookstore_backend.entity.CartItem;
import com.vincentni.bookstore_backend.service.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.ArrayList;
@Service
public class CartServiceImpl implements CartService {

    @Autowired
    private CartDao cartDao;

    @Autowired
    private BookDao bookDao;

    @Override
    public void addCartItem(int userId, int bookId) {
        cartDao.addCartItem(userId,bookId);
    }

    @Override
    public List<CartInfo> getCartById(int userId) {
        List<CartInfo> cartList= new ArrayList<>();;
        List<CartItem> cartItems=cartDao.getCartByUser(userId);
        for(CartItem cartItem:cartItems){
            Book book=bookDao.findOne(cartItem.getBookId());
            CartInfo cartInfo = new CartInfo();
            cartInfo.setAmount(cartItem.getAmount());
            cartInfo.setBookId(cartItem.getBookId());
            cartInfo.setAuthor(book.getAuthor());
            cartInfo.setPrice(book.getPrice());
            cartInfo.setImageUrl(book.getImageUrl());
            cartInfo.setBookName(book.getBookName());
            cartList.add(cartInfo);
        }
        return cartList;
    }
}
