import React from 'react';
import {message , DatePicker} from 'antd';
import * as orderService from '../services/orderService';
import { getUsers } from '../services/userService';

const {RangePicker} = DatePicker;

export class UserSalesTable extends React.Component{
    constructor(props){
        super(props);
        this.state={
            orderList:[],
            userList:[],
            showUserList:[],
        };
    }
    componentDidMount() {
        let user = JSON.parse(localStorage.getItem('user'));
        if (user === null) {
            message.error("请登录");
        } else if (user.userType !== 'admin') {
            message.error("你没有权限");
        } else {
            this.fetchOrder();
            setTimeout(() => this.fetchUser(), 100);
        }
    };

    fetchOrder = () => {
        const callback =  (data) => {
            let orderList=[];
            for (let order of data){
                let totalPrice=0;
                for(let item of order.orderItemList){
                    totalPrice+=item.price*item.bookNumber;
                }
                orderList.push({
                    orderDate:order.time.substring(0,10),
                    price:totalPrice,
                    userId:order.userId,
                });
            }
            this.setState({
                orderList:orderList,
            });
        };
        orderService.getOrder(callback);
    }

    fetchUser = () => {
        const callback = (data) => {
            let userList=new Array(data.length);
            for(let user of data){
                userList[user.userId-1]={
                    username:user.username,
                    cost:0
                };
            }
            for(let order of this.state.orderList){
                userList[order.userId-1].cost+=order.price;
            }
            let showUserList=JSON.parse(JSON.stringify(userList));
            this.setState({
                userList: userList,
                showUserList:showUserList.sort(function(a, b){return b.cost - a.cost}),
            });
        };
        getUsers(callback);
    }

    timeChange = (_, dateString) =>{
        const startTime = new Date(Date.parse(dateString[0]));
        const endTime = new Date(Date.parse(dateString[1]));
        let arr = [];
        for (let order of this.state.orderList) {
            let time = new Date(Date.parse(order.orderDate));
            if((startTime===''|| time >= startTime) && (endTime==='' || time <= endTime)){
                arr.push(order);
            }
        }
        let newUserList=JSON.parse(JSON.stringify(this.state.userList));
        for(let user of newUserList){
            user.cost=0;
        }
        for(let order of arr){
            newUserList[order.userId-1].cost+=order.price;
        }
        this.setState({
            showUserList:newUserList.sort(function(a, b){return b.cost - a.cost}),
        });
    }

    render(){
        const rows = [];
            this.state.showUserList.map((item,idx) => {
                rows.push(
                    <div>
                        <br/>
                        <div className="Cart-Items">
                            <div className="about">
                                <h1 className="title">{item.username}</h1>
                            </div>
                            <div className="prices">
                                <div className="amount">Rank:{idx+1} Total Cost: ${(item.cost/100).toFixed(2)} </div>
                            </div>
                        </div>
                        <br/>
                    </div>
                );
            });
        return(
            <div>
                <br/>
                <RangePicker onChange={this.timeChange}/>
                <br/>
                {rows}
                <br/>
            </div>
        );
    };

}