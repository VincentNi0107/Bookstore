package com.vincentni.bookstore_backend.dao;
import com.vincentni.bookstore_backend.entity.CartItem;

import java.util.List;

public interface CartDao {
    void addCartItem(int userId,int bookId);

    void clearCartByUser(int userId);

    List<CartItem> getCartByUser(int userId);
}

