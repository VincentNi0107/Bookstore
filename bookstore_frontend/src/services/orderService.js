import config from '../config.json'
import {postRequest, postRequest_v2} from "../utils/ajax";

export const getOrder=(callback)=>{
    const url = `${config.apiUrl}/getOrder`;
    postRequest(url, {}, callback);
};