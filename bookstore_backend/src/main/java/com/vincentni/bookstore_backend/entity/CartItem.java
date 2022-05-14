package com.vincentni.bookstore_backend.entity;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
@Entity
@Table(name = "cart_items")
@JsonIgnoreProperties(value = {"handler","hibernateLazyInitializer","fieldHandler"})
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class,property = "cartItemId")
public class CartItem {
    private int cartItemId;
    private int userId;
    private int bookId;
    private int amount;

    @Id
    @GeneratedValue(generator = "increment")
    @GenericGenerator(name = "increment", strategy = "increment")
    @Column(name = "cart_item_id")
    public Integer getCartItemId(){
        return cartItemId;
    }
    public void setCartItemId(Integer cartItemId){
        this.cartItemId=cartItemId;
    }

    @Basic
    @Column(name="user_id")
    public Integer getUserId(){
        return userId;
    }
    public void setUserId(Integer userId){
        this.userId=userId;
    }

    @Basic
    @Column(name="book_id")
    public Integer getBookId(){
        return bookId;
    }
    public void setBookId(Integer bookId){
        this.bookId=bookId;
    }

    @Basic
    @Column(name="amount")
    public Integer getAmount(){
        return amount;
    }
    public void setAmount(Integer amount){
        this.amount=amount;
    }
}
