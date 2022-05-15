package com.vincentni.bookstore_backend.repository;
import com.vincentni.bookstore_backend.entity.OrderItem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface OrderItemRepository extends JpaRepository<OrderItem,Integer>{
    @Query(value = "from OrderItem where orderId = :orderId")
    List<OrderItem> getOrderItemsByOrderId(@Param("orderId") Integer orderId);
}
