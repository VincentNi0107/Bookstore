package com.vincentni.bookstore_backend.entity;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import org.hibernate.annotations.GenericGenerator;
import lombok.Getter;
import lombok.Setter;
import javax.persistence.*;

@Entity
@Table(name = "books")
@JsonIgnoreProperties(value = {"handler","hibernateLazyInitializer","fieldHandler"})
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class,property = "bookId")
public class Book {

    private int bookId;
    private String isbn;
    private String bookName;
    private String author;
    private Double originPrice;
    private Double price;
    private int inventory;
    private String description;
    private String imageUrl;

    @Id
    @GeneratedValue(generator = "increment")
    @GenericGenerator(name = "increment", strategy = "increment")
    @Column(name = "book_id")
    public Integer getBookId() {
        return bookId;
    }
    private void setBookId(Integer id) {
        this.bookId = id;
    }

    @Basic
    @Column(name="isbn")
    public String getIsbn() {
        return isbn;
    }
    public void setIsbn(String isbn) {
        this.isbn = isbn;
    }

    @Basic
    @Column(name="book_name")
    public String getBookName() {
        return bookName;
    }
    public void setBookName(String bookName) {
        this.bookName = bookName;
    }

    @Basic
    @Column(name="author")
    public String getAuthor() {
        return author;
    }
    public void setAuthor(String author) {
        this.author = author;
    }

    @Basic
    @Column(name="origin_price")
    public Double getOriginPrice(){
        return originPrice;
    }

    public void setOriginPrice(Double originPrice) {
        this.originPrice = originPrice;
    }

    @Basic
    @Column(name="price")
    public Double getPrice(){
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    @Basic
    @Column(name="inventory")
    public int getInventory(){
        return inventory;
    }

    public void setInventory(int inventory) {
        this.inventory = inventory;
    }

    @Basic
    @Column(name="description")
    public String getDescription(){
        return description;
    }
    public void setDescription(String description) {
        this.description = description;
    }

    @Basic
    @Column(name="image_url")
    public String getImageUrl(){
        return imageUrl;
    }
    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }
}
