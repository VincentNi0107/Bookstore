package com.vincentni.bookstore_backend.service;

import com.vincentni.bookstore_backend.entity.User;

public interface UserService {
    User checkUser(String username,String password);
}
