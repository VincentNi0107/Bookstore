import config from '../config.json'
import {postRequest, postRequest_v2} from "../utils/ajax";



export const getCart=(callback)=>{
    const url = `${config.apiUrl}/getCart`;
    postRequest(url, {}, callback);
};

export const deleteAllCart=(callback)=>{
    const url = `${config.apiUrl}/deleteAllCartItem`;
    postRequest(url, {}, callback);
};

export const addCartItem=(bookId,callback)=>{
    const data = {bookId: bookId};
    const url = `${config.apiUrl}/addCartItem`;
    postRequest_v2(url, data, callback);
};

export const deleteCartItem=(bookId,callback)=>{
    const data = {bookId: bookId};
    const url = `${config.apiUrl}/deleteCartItem`;
    postRequest_v2(url, data, callback);
};

export const decreaseCartItem=(bookId,callback)=>{
    const data = {bookId: bookId};
    const url = `${config.apiUrl}/decreaseCartAmount`;
    postRequest_v2(url, data, callback);
};

export const checkOut = (data,callback)=>{
    const url = `${config.apiUrl}/checkOut`;
    postRequest(url, data, callback);
};