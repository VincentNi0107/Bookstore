package com.vincentni.bookstore_backend.controller;

import com.vincentni.bookstore_backend.constant.Constant;
import com.vincentni.bookstore_backend.dto.CartInfo;
import com.vincentni.bookstore_backend.service.CartService;
import com.vincentni.bookstore_backend.utils.msgutils.Msg;
import com.vincentni.bookstore_backend.utils.msgutils.MsgCode;
import com.vincentni.bookstore_backend.utils.msgutils.MsgUtil;
import com.vincentni.bookstore_backend.utils.sessionutils.SessionUtil;
import net.sf.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class CartController {
    @Autowired
    CartService cartService;

    @RequestMapping("/addCartItem")
    public Msg addCartItem(@RequestParam("bookId")int bookId){
        JSONObject auth = SessionUtil.getAuth();
        System.out.println("addCartItem");
        if(auth != null){
            cartService.addCartItem(auth.getInt(Constant.USER_ID),bookId);
            return MsgUtil.makeMsg(MsgUtil.SUCCESS,MsgUtil.SUCCESS_MSG);
        }
        else {
            return MsgUtil.makeMsg(MsgCode.NOT_LOGGED_IN_ERROR);
        }
    }

    @RequestMapping("/getCart")
    public List<CartInfo> getCartList(){
        JSONObject auth = SessionUtil.getAuth();
        System.out.println("getCart");
        if(auth != null){
            return cartService.getCartById(auth.getInt(Constant.USER_ID));
        }
        else {
            return null;
        }
    }
}
