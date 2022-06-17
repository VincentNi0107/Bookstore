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
@Table(name = "books")
@JsonIgnoreProperties(value = {"handler","hibernateLazyInitializer","fieldHandler"})
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class,property = "bookId")
public class Book {

    @Id
    @GeneratedValue(generator = "increment")
    @GenericGenerator(name = "increment", strategy = "increment")
    @Column(name = "book_id")
    private Integer bookId;

    @Column(name="isbn")
    private String isbn;

    @Column(name="book_name")
    private String bookName;

    @Column(name="author")
    private String author;

    @Column(name="origin_price")
    private Integer originPrice;

    @Column(name="price")
    private Integer price;

    @Column(name="inventory")
    private Integer inventory;

    @Column(name="description")
    private String description;

    @Column(name="image_url")
    private String imageUrl;

}
