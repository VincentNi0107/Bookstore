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
export const getCart=(callback)=>{
    const url = `${config.apiUrl}/getCart`;
    postRequest(url, {}, callback);
};
export const addCartItem=(bookId,callback)=>{
    const data = {bookId: bookId};
    const url = `${config.apiUrl}/addCartItem`;
    postRequest_v2(url, data, callback);
};
// export const getBook =(id,callback)=>{
//     const url = `${config.apiUrl}/getBook?id=${id}`;
//     getRequest(url,callback);
// };