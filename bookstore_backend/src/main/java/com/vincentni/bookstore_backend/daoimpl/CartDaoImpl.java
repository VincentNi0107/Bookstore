package com.vincentni.bookstore_backend.daoimpl;

import com.vincentni.bookstore_backend.dao.CartDao;
import com.vincentni.bookstore_backend.entity.CartItem;
import com.vincentni.bookstore_backend.repository.CartItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class CartDaoImpl implements CartDao {

    @Autowired
    private CartItemRepository cartItemRepository;

    @Override
    public void addCartItem(int userId, int bookId) {
        CartItem cartItem=cartItemRepository.getCartItem(userId,bookId);
        if(cartItem==null){
            cartItem=new CartItem();
            cartItem.setUserId(userId);
            cartItem.setBookId(bookId);
            cartItem.setAmount(1);
            cartItemRepository.save(cartItem);
        }
        else {
            cartItemRepository.addAmount(userId,bookId);
        }
    }

    @Override
    public void clearCartByUser(int userId) {
        cartItemRepository.clearShoppingCartById(userId);
    }

    @Override
    public List<CartItem> getCartByUser(int userId) {
        return cartItemRepository.getCartByUser(userId);
    }

}
