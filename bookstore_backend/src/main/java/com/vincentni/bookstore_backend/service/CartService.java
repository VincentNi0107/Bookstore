package com.vincentni.bookstore_backend.service;
import com.vincentni.bookstore_backend.entity.CartItem;

import java.util.List;
public interface CartService {
    void addCartItem(int userId,int bookId);
    List<CartItem> getCartByUserId(int userId);
}
