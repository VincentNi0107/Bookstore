package com.vincentni.bookstore_backend.entity;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import lombok.*;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name = "order_items")
@Setter
@Getter
@NoArgsConstructor
public class OrderItem {

    @Id
    @GeneratedValue(generator = "increment")
    @GenericGenerator(name = "increment", strategy = "increment")
    @Column(name="order_item_id")
    private Integer id;

    @Column(name="order_id")
    private Integer orderId;

    @Column(name = "book_id")
    private Integer bookId;

    @Column(name="amount")
    private Integer bookNumber;

    @Column(name="price")
    private Double price;
}
//@Getter
//@Setter
//@Entity
//@Table(name = "order_items")
//@JsonIgnoreProperties(value = {"handler","hibernateLazyInitializer","fieldHandler"})
//@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class,property = "orderItemId")
//public class OrderItem {
//    private int orderItemId;
//    private int orderId;
//    private int userId;
//    private int bookId;
//    private int amount;
//
//    @Id
//    @GeneratedValue(generator = "increment")
//    @GenericGenerator(name = "increment", strategy = "increment")
//    @Column(name = "order_item_id")
//    public int getOrderItemId() {
//        return orderItemId;
//    }
//    public void setOrderItemId(int orderItemId){
//        this.orderItemId=orderItemId;
//    }
//
//}