package com.vincentni.bookstore_backend.daoimpl;
import com.vincentni.bookstore_backend.dao.UserDao;
import com.vincentni.bookstore_backend.entity.User;
import com.vincentni.bookstore_backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;


@Repository
public class UserDaoImpl implements UserDao {

    @Autowired
    UserRepository userRepository;

    @Override
    public User checkUser(String username,String password){
        return userRepository.checkUser(username,password);
    }

    @Override
    public User getUserById(Integer userId) {
        return userRepository.getById(userId);
    }
}
