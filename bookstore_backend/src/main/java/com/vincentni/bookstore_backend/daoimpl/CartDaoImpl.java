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
    public CartItem getCartItemById(Integer cartItemId) {
        return cartItemRepository.getById(cartItemId);
    }

    @Override
    public List<CartItem> getCartItemsByUserId(Integer userId) {
        return cartItemRepository.getByUserId(userId);
    }

    @Override
    public CartItem getCartItemByUserIdAndBookId(Integer userId, Integer bookId) {
        return cartItemRepository.getCartItemByUserIdAndBookId(userId,bookId);
    }

    @Override
    public void saveCartItem(CartItem cartItem) {
        cartItemRepository.save(cartItem);
    }

    @Override
    public void deleteCartItemById(Integer cartItemId) {
        cartItemRepository.deleteById(cartItemId);
    }

    @Override
    public void deleteCartByUserId(Integer userId) {
        cartItemRepository.deleteByUserId(userId);
    }


}
