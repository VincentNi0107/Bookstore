import config from '../config.json'
import {postRequest, postRequest_v2} from "../utils/ajax";


export const getBooks = (data, callback) => {
    const url = `${config.apiUrl}/getBooks`;
    postRequest(url, data, callback);
};

export const getBook = (bookId, callback) => {
    const data = {bookId: bookId};
    const url = `${config.apiUrl}/getBook`;
    postRequest_v2(url, data, callback);
};

export const deleteBook = (bookId, callback) => {
    const data = {bookId: bookId};
    const url = `${config.apiUrl}/deleteBook`;
    postRequest_v2(url, data, callback);
};

export const addBook = (data,callback)=>{
    const url = `${config.apiUrl}/addBook`;
    postRequest(url, data, callback);
};

export const editBook = (data,callback)=>{
    const url = `${config.apiUrl}/editBook`;
    postRequest(url, data, callback);
};