package com.vincentni.bookstore_backend.serviceimpl;

import com.vincentni.bookstore_backend.dao.UserDao;
import com.vincentni.bookstore_backend.entity.User;
import com.vincentni.bookstore_backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserDao userDao;

    @Override
    public User checkUser(String username, String password){
        return userDao.checkUser(username,password);
    }
}
