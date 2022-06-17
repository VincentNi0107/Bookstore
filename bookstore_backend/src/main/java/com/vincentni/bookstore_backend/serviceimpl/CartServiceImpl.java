package com.vincentni.bookstore_backend.serviceimpl;

import com.vincentni.bookstore_backend.dao.BookDao;
import com.vincentni.bookstore_backend.dao.CartDao;
import com.vincentni.bookstore_backend.entity.CartItem;
import com.vincentni.bookstore_backend.service.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class CartServiceImpl implements CartService {

    @Autowired
    private CartDao cartDao;

    @Autowired
    private BookDao bookDao;
    @Override
    public void addCartItem(int userId, int bookId) {
        CartItem cartItem= cartDao.getCartItemByUserIdAndBookId(userId,bookId);
        if(cartItem==null){
            CartItem newCartItem = new CartItem();
            newCartItem.setUserId(userId);
            newCartItem.setAmount(1);
            newCartItem.setBook(bookDao.findOne(bookId));
            cartDao.saveCartItem(newCartItem);
        }
        else{
            cartItem.setAmount(cartItem.getAmount()+1);
            cartDao.saveCartItem(cartItem);
        }
    }

    @Override
    public List<CartItem> getCartByUserId(int userId) {
        return cartDao.getCartItemsByUserId(userId);

    }
}
