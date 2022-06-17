package com.vincentni.bookstore_backend.repository;
import com.vincentni.bookstore_backend.entity.Order;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
public interface OrderRepository extends JpaRepository<Order,Integer> {
    @Query(value = "from Order where user.userId = :userId ")
    List<Order> getOrderByUserId(@Param("userId") Integer userId);
}
