package com.vincentni.bookstore_backend.dao;

import com.vincentni.bookstore_backend.entity.User;

public interface UserDao {
    User checkUser(String username, String password);
    User getUserById(Integer userId);
}
