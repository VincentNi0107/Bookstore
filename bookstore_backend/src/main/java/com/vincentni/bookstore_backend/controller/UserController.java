package com.vincentni.bookstore_backend.controller;
import com.vincentni.bookstore_backend.constant.Constant;
import com.vincentni.bookstore_backend.dto.NewUserDTO;
import com.vincentni.bookstore_backend.entity.Book;
import com.vincentni.bookstore_backend.entity.User;
import com.vincentni.bookstore_backend.service.UserService;
import com.vincentni.bookstore_backend.utils.msgutils.Msg;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
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

    @RequestMapping("/getUserList")
    public List<User> getAllUsers(){
        return userService.getAllUsers();
    }

    @RequestMapping("/ban")
    public Msg ban(@RequestParam("userId") Integer userId){
        System.out.println("ban");
        return userService.banUser(userId);
    }

    @RequestMapping("/unban")
    public Msg unban(@RequestParam("userId") Integer userId){
        System.out.println("unban");
        return userService.unBanUser(userId);
    }

    @RequestMapping("/checkDup")
    public Msg checkDup(@RequestParam("username") String userName){
        System.out.println("checkDup");
        return userService.checkUsernameDup(userName);
    }

    @RequestMapping("/register")
    public Msg register(@RequestBody NewUserDTO newUserDTO){
        System.out.println("register");
        return userService.addUser(newUserDTO);
    }
}
