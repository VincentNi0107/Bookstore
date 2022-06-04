package com.vincentni.bookstore_backend.repository;
import com.vincentni.bookstore_backend.entity.CartItem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import javax.transaction.Transactional;
import java.util.List;

public interface CartItemRepository extends JpaRepository<CartItem,Integer> {
    List<CartItem> getByUserId(Integer userId);
    void deleteByUserId(Integer userId);
    @Query(value = "from CartItem where userId = :userId and book.bookId = :bookId")
    CartItem getCartItemByUserIdAndBookId(@Param("userId") Integer userId, @Param("bookId") Integer bookId);

//    CartItem findCartItemByUserIdAndBook(Integer userid,Integer bookId);
//
//    @Transactional
//    @Modifying
//    @Query(value="update CartItem set amount=amount+1 where userId = :userId and bookId = :bookId")
//    void addAmount(@Param("userId") Integer userId, @Param("bookId") Integer bookId);
//
//    @Transactional
//    @Modifying
//    @Query(value="delete from CartItem where userId = :userId")
//    void clearShoppingCartById(@Param("userId") Integer userId);
}
