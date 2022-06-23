package com.vincentni.bookstore_backend.controller;

import com.vincentni.bookstore_backend.constant.Constant;
import com.vincentni.bookstore_backend.dto.GetOrderDTO;
import com.vincentni.bookstore_backend.dto.NewOrderDTO;
import com.vincentni.bookstore_backend.entity.Order;
import com.vincentni.bookstore_backend.service.OrderService;
import com.vincentni.bookstore_backend.utils.sessionutils.SessionUtil;
import net.sf.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Objects;

@RestController
public class OrderController {

    @Autowired
    private OrderService orderService;

    @RequestMapping("/getOrder")
    public List<GetOrderDTO> getOrder(){
        System.out.println("getOrder");
        return orderService.getOrder();
    }

    @RequestMapping("/checkOut")
    public Order checkout(@RequestBody NewOrderDTO newOrderDTO){
        System.out.println("checkOut");
        return orderService.addOrder(newOrderDTO);
    }
}
