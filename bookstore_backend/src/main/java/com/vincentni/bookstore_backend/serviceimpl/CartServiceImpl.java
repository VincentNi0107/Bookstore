package com.vincentni.bookstore_backend.serviceimpl;

import com.vincentni.bookstore_backend.constant.Constant;
import com.vincentni.bookstore_backend.dao.BookDao;
import com.vincentni.bookstore_backend.dao.CartDao;
import com.vincentni.bookstore_backend.entity.CartItem;
import com.vincentni.bookstore_backend.service.CartService;
import com.vincentni.bookstore_backend.utils.msgutils.Msg;
import com.vincentni.bookstore_backend.utils.msgutils.MsgCode;
import com.vincentni.bookstore_backend.utils.msgutils.MsgUtil;
import com.vincentni.bookstore_backend.utils.sessionutils.SessionUtil;
import net.sf.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
@Service
public class CartServiceImpl implements CartService {

    @Autowired
    private CartDao cartDao;

    @Autowired
    private BookDao bookDao;
    @Override
    public Msg addCartItem(int bookId) {
        JSONObject auth = SessionUtil.getAuth();
        if(auth != null){
            CartItem cartItem= cartDao.getCartItemByUserIdAndBookId(auth.getInt(Constant.USER_ID),bookId);
            if(cartItem==null){
                CartItem newCartItem = new CartItem();
                newCartItem.setUserId(auth.getInt(Constant.USER_ID));
                newCartItem.setAmount(1);
                newCartItem.setBook(bookDao.findOne(bookId));
                if(bookDao.findOne(bookId).getInventory()<=0){
                    return MsgUtil.makeMsg(MsgUtil.ERROR,MsgUtil.ERROR_INVENTORY);
                }
                cartDao.saveCartItem(newCartItem);
            }
            else{
                cartItem.setAmount(cartItem.getAmount()+1);
                if(bookDao.findOne(bookId).getInventory()<=cartItem.getAmount()){
                    return MsgUtil.makeMsg(MsgUtil.ERROR,MsgUtil.ERROR_INVENTORY);
                }
                cartDao.saveCartItem(cartItem);
            }
            return MsgUtil.makeMsg(MsgUtil.SUCCESS,MsgUtil.SUCCESS_MSG);
        }
        return MsgUtil.makeMsg(MsgCode.NOT_LOGGED_IN_ERROR);
    }

    @Override
    public Msg decreaseAmount(int bookId) {
        JSONObject auth = SessionUtil.getAuth();
        if(auth != null){
            CartItem cartItem= cartDao.getCartItemByUserIdAndBookId(auth.getInt(Constant.USER_ID),bookId);
            if(cartItem!=null&&cartItem.getAmount()>1){
                cartItem.setAmount(cartItem.getAmount()-1);
                cartDao.saveCartItem(cartItem);
                return MsgUtil.makeMsg(MsgUtil.SUCCESS,MsgUtil.SUCCESS_MSG);
            }
            else{
                System.out.println("only one left");
                return MsgUtil.makeMsg(MsgUtil.ERROR,MsgUtil.ERROR_CARTDECREASE);
            }
        }
        return MsgUtil.makeMsg(MsgCode.NOT_LOGGED_IN_ERROR);
    }

    @Override
    public Msg deleteCartItem(int bookId) {
        JSONObject auth = SessionUtil.getAuth();
        if(auth != null){
            CartItem cartItem= cartDao.getCartItemByUserIdAndBookId(auth.getInt(Constant.USER_ID),bookId);
            if(cartItem!=null){
                cartDao.deleteCartItemById(cartItem.getCartItemId());
            }
            return MsgUtil.makeMsg(MsgUtil.SUCCESS,MsgUtil.SUCCESS_MSG);
        }
        return MsgUtil.makeMsg(MsgCode.NOT_LOGGED_IN_ERROR);
    }

    @Override
    @Transactional
    public Msg deleteAll() {
        JSONObject auth = SessionUtil.getAuth();
        if(auth != null){
            cartDao.deleteCartByUserId(auth.getInt(Constant.USER_ID));
            return MsgUtil.makeMsg(MsgUtil.SUCCESS,MsgUtil.SUCCESS_MSG);
        }
        return MsgUtil.makeMsg(MsgCode.NOT_LOGGED_IN_ERROR);
    }

    @Override
    public List<CartItem> getCartByUserId() {
        JSONObject auth = SessionUtil.getAuth();
        if(auth != null){
            return cartDao.getCartItemsByUserId(auth.getInt(Constant.USER_ID));
        }
        else {
            return null;
        }
    }
}
