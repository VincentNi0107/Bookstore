package com.vincentni.bookstore_backend.entity;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import org.hibernate.annotations.GenericGenerator;
import java.sql.Timestamp;
import java.util.List;
import javax.persistence.*;
import lombok.*;
@Entity
@Setter
@Getter
@Table(name = "orders")
@JsonIgnoreProperties(value = {"handler","hibernateLazyInitializer","fieldHandler"})
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class,property = "id")
public class Order {

    @Id
    @GeneratedValue(generator = "increment")
    @GenericGenerator(name = "increment", strategy = "increment")
    @Column(name="order_id")
    private Integer id;

    @Column(name="user_id")
    private Integer userId;

    @Column(name="order_date")
    private Timestamp time;

}
