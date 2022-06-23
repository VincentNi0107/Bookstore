package com.vincentni.bookstore_backend.service;

import com.vincentni.bookstore_backend.dto.NewUserDTO;
import com.vincentni.bookstore_backend.entity.User;
import com.vincentni.bookstore_backend.utils.msgutils.Msg;

import java.util.List;

public interface UserService {
    User checkUser(String username,String password);
    List<User> getAllUsers();

    Msg banUser(Integer userId);

    Msg unBanUser(Integer userId);

    Msg checkUsernameDup(String username);

    Msg addUser(NewUserDTO newUserDTO);
}
