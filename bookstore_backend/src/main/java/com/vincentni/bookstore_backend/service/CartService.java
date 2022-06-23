package com.vincentni.bookstore_backend.service;
import com.vincentni.bookstore_backend.entity.CartItem;
import com.vincentni.bookstore_backend.utils.msgutils.Msg;

import java.util.List;
public interface CartService {
    Msg addCartItem(int bookId);
    Msg decreaseAmount(int bookId);
    Msg deleteCartItem(int bookId);
    Msg deleteAll();
    List<CartItem> getCartByUserId();
}
