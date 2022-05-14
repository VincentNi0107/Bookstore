package com.vincentni.bookstore_backend.controller;

import com.vincentni.bookstore_backend.constant.Constant;
import com.vincentni.bookstore_backend.dto.CartInfo;
import com.vincentni.bookstore_backend.dto.GetOrderDTO;
import com.vincentni.bookstore_backend.dto.NewOrderDTO;
import com.vincentni.bookstore_backend.dto.OrderBookInfo;
import com.vincentni.bookstore_backend.entity.CartItem;
import com.vincentni.bookstore_backend.entity.Order;
import com.vincentni.bookstore_backend.service.OrderService;
import com.vincentni.bookstore_backend.utils.msgutils.Msg;
import com.vincentni.bookstore_backend.utils.msgutils.MsgCode;
import com.vincentni.bookstore_backend.utils.msgutils.MsgUtil;
import com.vincentni.bookstore_backend.utils.sessionutils.SessionUtil;
import net.sf.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Objects;

@RestController
public class OrderController {

    @Autowired
    private OrderService orderService;

    @RequestMapping("/getOrder")
    public List<GetOrderDTO> getOrder(){
        JSONObject auth = SessionUtil.getAuth();
        System.out.println("getOrder");
        if(auth != null){
            return orderService.getOrderByUserId(auth.getInt(Constant.USER_ID));
        }
        else {
            return null;
        }
    }

    @RequestMapping("/checkOut")
    public GetOrderDTO checkout(@RequestBody NewOrderDTO newOrderDTO){
        JSONObject auth = SessionUtil.getAuth();
        System.out.println("checkOut");
        if(auth != null){
            newOrderDTO.setUserId(Objects.requireNonNull(SessionUtil.getAuth()).getInt(Constant.USER_ID));
            return orderService.addOrder(newOrderDTO);
        }
        else {
            return null;
        }

    }

}