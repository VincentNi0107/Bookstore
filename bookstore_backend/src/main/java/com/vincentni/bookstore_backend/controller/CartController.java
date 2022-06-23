package com.vincentni.bookstore_backend.controller;

import com.vincentni.bookstore_backend.constant.Constant;
import com.vincentni.bookstore_backend.entity.CartItem;
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
        System.out.println("addCartItem");
        return cartService.addCartItem(bookId);
    }

    @RequestMapping("/getCart")
    public List<CartItem> getCartList(){
        System.out.println("getCart");
        return cartService.getCartByUserId();
    }

    @RequestMapping("/decreaseCartAmount")
    public void decreaseCartAmount(@RequestParam("bookId")int bookId){
        System.out.println("decreaseCartAmount");
        cartService.decreaseAmount(bookId);
    }

    @RequestMapping("/deleteCartItem")
    public void deleteCartItem(@RequestParam("bookId")int bookId){
        System.out.println("deleteCartItem");
        cartService.deleteCartItem(bookId);
    }

    @RequestMapping("/deleteAllCartItem")
    public void deleteAllCartItem(){
        System.out.println("deleteAllCartItem");
        cartService.deleteAll();
    }
}
