package com.vincentni.bookstore_backend.dao;

import com.vincentni.bookstore_backend.entity.User;

import java.util.List;

public interface UserDao {
    User checkUser(String username, String password);
    User getUserById(Integer userId);
    List<User> getAllUsers();
    void saveUser(User user);
    User getUserByName(String username);
}
