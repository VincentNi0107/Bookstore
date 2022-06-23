import {postRequest, postRequest_v2} from "../utils/ajax";
import {message} from 'antd';
import config from '../config.json'
import {history} from "../utils/history";

export const getUsers = (callback) => {
    const url = `${config.apiUrl}/getUserList`;
    postRequest(url, {}, callback);
};

export const ban = (userId, callback) => {
    const data = {userId: userId};
    const url = `${config.apiUrl}/ban`;
    postRequest_v2(url, data, callback);
};

export const unban = (userId, callback) => {
    const data = {userId: userId};
    const url = `${config.apiUrl}/unban`;
    postRequest_v2(url, data, callback);
};

export const login = (data) => {
    const url = `${config.apiUrl}/login`;
    const callback = (data) => {
        if(data.status >= 0) {
            localStorage.setItem('user', JSON.stringify(data.data));
            history.push("/");
            message.success(data.msg);
        }
        else{
            message.error(data.msg);
        }
    };
    postRequest(url, data, callback);
};



export const checkSession = (callback) => {
    const url = `${config.apiUrl}/checkSession`;
    postRequest(url, {}, callback);
};

export const logout = () => {
    const url = `${config.apiUrl}/logout`;

    const callback = (data) => {
        if(data.status >= 0) {
            localStorage.removeItem("user");
            history.push("/login");
            message.success(data.msg);
        }
        else{
            message.error(data.msg);
        }
    };
    postRequest(url, {}, callback);
};


export const register = (data) => {
    const url = `${config.apiUrl}/register`;
    const callback = (response) => {
        if (response.status >=0) {
            // localStorage.setItem('user', JSON.stringify(response.data));
            // history.push("/");
            message.success(response.msg);
        } else {
            message.error(response.msg);
        }
    };
    postRequest(url, data, callback);
};

export const checkDup= (username, callback) => {
    const data = {username: username};
    const url = `${config.apiUrl}/checkDup`;
    postRequest_v2(url, data, callback);
};