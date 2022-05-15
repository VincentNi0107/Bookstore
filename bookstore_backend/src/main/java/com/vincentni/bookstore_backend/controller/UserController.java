package com.vincentni.bookstore_backend.controller;
import com.vincentni.bookstore_backend.constant.Constant;
import com.vincentni.bookstore_backend.entity.User;
import com.vincentni.bookstore_backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
public class UserController {

    @Autowired
    private UserService userService;

    @RequestMapping("/checkUser")
    public User checkUser(@RequestBody Map<String, String> params){
        String username = params.get(Constant.USERNAME);
        String password = params.get(Constant.PASSWORD);
        return userService.checkUser(username, password);
    }
}
