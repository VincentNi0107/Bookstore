package com.vincentni.bookstore_backend.serviceimpl;

import com.vincentni.bookstore_backend.constant.Constant;
import com.vincentni.bookstore_backend.dao.UserDao;
import com.vincentni.bookstore_backend.dto.NewUserDTO;
import com.vincentni.bookstore_backend.entity.User;
import com.vincentni.bookstore_backend.service.UserService;
import com.vincentni.bookstore_backend.utils.msgutils.Msg;
import com.vincentni.bookstore_backend.utils.msgutils.MsgUtil;
import com.vincentni.bookstore_backend.utils.sessionutils.SessionUtil;
import net.sf.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserDao userDao;

    @Override
    public User checkUser(String username, String password){
        return userDao.checkUser(username,password);
    }

    @Override
    public List<User> getAllUsers() {
        JSONObject auth = SessionUtil.getAuth();
        if(auth != null && Objects.equals(auth.getString(Constant.USER_TYPE), "admin")){
            return userDao.getAllUsers();
        }
        return null;
    }

    @Override
    public Msg banUser(Integer userId) {
        JSONObject auth = SessionUtil.getAuth();
        User user = userDao.getUserById(userId);
        if(auth != null && Objects.equals(auth.getString(Constant.USER_TYPE), "admin") && user.getUserType().equals("customer")){
            user.setUserType("ban");
            userDao.saveUser(user);
            return MsgUtil.makeMsg(MsgUtil.SUCCESS,MsgUtil.SUCCESS_BAN);
        }
        else {
            return MsgUtil.makeMsg(MsgUtil.ERROR,MsgUtil.ERROR_BAN);
        }
    }

    @Override
    public Msg unBanUser(Integer userId) {
        JSONObject auth = SessionUtil.getAuth();
        User user = userDao.getUserById(userId);
        if(auth != null && Objects.equals(auth.getString(Constant.USER_TYPE), "admin") && user.getUserType().equals("ban")){
            user.setUserType("customer");
            userDao.saveUser(user);
            return MsgUtil.makeMsg(MsgUtil.SUCCESS,MsgUtil.SUCCESS_UNBAN);
        }
        else {
            return MsgUtil.makeMsg(MsgUtil.ERROR,MsgUtil.ERROR_UNBAN);
        }
    }

    @Override
    public Msg checkUsernameDup(String username) {
        User user=userDao.getUserByName(username);
        if(user!=null){
            return MsgUtil.makeMsg(MsgUtil.ERROR,MsgUtil.ERROR_NAMEDUP);
        }
        return MsgUtil.makeMsg(MsgUtil.SUCCESS,MsgUtil.SUCCESS_NAMEVALID);
    }

    @Override
    public Msg addUser(NewUserDTO newUserDTO) {
        User user=userDao.getUserByName(newUserDTO.getUsername());
        if(user!=null){
            return MsgUtil.makeMsg(MsgUtil.ERROR,MsgUtil.ERROR_NAMEDUP);
        }
        User newUser=new User();
        newUser.setUserType("customer");
        newUser.setEmail(newUserDTO.getEmail());
        newUser.setPassword(newUserDTO.getPassword());
        newUser.setUsername(newUserDTO.getUsername());
        userDao.saveUser(newUser);
        return MsgUtil.makeMsg(MsgUtil.SUCCESS,MsgUtil.SUCCESS_REGISTER);
    }
}
