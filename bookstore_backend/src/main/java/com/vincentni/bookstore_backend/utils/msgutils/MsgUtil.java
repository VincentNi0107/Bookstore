package com.vincentni.bookstore_backend.utils.msgutils;
import net.sf.json.JSONObject;

public class MsgUtil {
    public static final int SUCCESS = 0;
    public static final int ERROR = -1;
    public static final int LOGIN_USER_ERROR = -100;
    public static final int NOT_LOGGED_IN_ERROR = -101;

    public static final String SUCCESS_MSG = "Success!";
    public static final String LOGIN_SUCCESS_MSG = "Login Success!";
    public static final String LOGOUT_SUCCESS_MSG = "Logout Success!";
    public static final String LOGOUT_ERR_MSG = "Logout Error!";
    public static final String ERROR_MSG = "Error!";
    public static final String LOGIN_USER_ERROR_MSG = "Username or Password Wrong! Try Again!";
    public static final String NOT_LOGGED_IN_ERROR_MSG = "Login out of Date! Please Login Again!";

    public static final String ACCOUNT_BAN = "You are Banned!";
    public static  final String SUCCESS_BAN = "Successfully Banned!";
    public static  final String ERROR_BAN = "Ban Error!";
    public static  final String SUCCESS_UNBAN = "Successfully Unbanned!";
    public static  final String ERROR_UNBAN = "Unban Error!";

    public static  final String SUCCESS_ADDBOOK = "Add Book Successfully!";
    public static  final String ERROR_ADDBOOK = "Add Book Error!";

    public static  final String SUCCESS_DELETEBOOK = "Delete Book Successfully!";
    public static  final String ERROR_DELETEBOOK = "Delete Book Error!";

    public static  final String SUCCESS_EDITBOOK = "Edit Book Successfully!";
    public static  final String ERROR_EDITBOOK = "Edit Book Error!";

    public static  final String ERROR_NAMEDUP = "Username Duplicated!";

    public static  final String SUCCESS_NAMEVALID = "Username Valid";

    public static  final String SUCCESS_REGISTER = "Register Success!";
    public static  final String ERROR_INVENTORY = "Out of Inventory!";
    public static  final String ERROR_CARTDECREASE = "Only One Left!";


    public static Msg makeMsg(MsgCode code, JSONObject data){
        return new Msg(code, data);
    }

    public static Msg makeMsg(MsgCode code, String msg, JSONObject data){
        return new Msg(code, msg, data);
    }

    public static Msg makeMsg(MsgCode code){
        return new Msg(code);
    }

    public static Msg makeMsg(MsgCode code, String msg){
        return new Msg(code, msg);
    }

    public static Msg makeMsg(int status, String msg, JSONObject data){
        return new Msg(status, msg, data);
    }

    public static Msg makeMsg(int status, String msg){
        return new Msg(status, msg);
    }
}
