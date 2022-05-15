package com.vincentni.bookstore_backend.entity;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import org.hibernate.annotations.GenericGenerator;
import lombok.Getter;
import lombok.Setter;
import javax.persistence.*;
@Entity
@Setter
@Getter
@Table(name = "cart_items")
@JsonIgnoreProperties(value = {"handler","hibernateLazyInitializer","fieldHandler"})
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class,property = "cartItemId")
public class CartItem {

    @Id
    @GeneratedValue(generator = "increment")
    @GenericGenerator(name = "increment", strategy = "increment")
    @Column(name = "cart_item_id")
    private int cartItemId;

    @Column(name="user_id")
    private int userId;

    @Column(name="book_id")
    private int bookId;

    @Column(name="amount")
    private int amount;

}
