import {postRequest, postRequest_v2} from "../utils/ajax";
import {message} from 'antd';
import config from '../config.json'
import {history} from "../utils/history";

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
    const url = `/user`;
    const callback = (response) => {
        if (response.status >=0) {
            localStorage.setItem('user', JSON.stringify(response.data));
            history.push("/");
            message.success("注册成功");
        } else {
            message.error(response.data);
        }
    };
    postRequest(url, data, callback);
};