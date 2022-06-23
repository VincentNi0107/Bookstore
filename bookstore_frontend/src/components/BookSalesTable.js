import React from 'react';
import {Table , DatePicker} from 'antd';
import * as orderService from '../services/orderService';
import {getBooks} from "../services/bookService";

const {RangePicker} = DatePicker;
  
export class BookSalesTable extends React.Component {
    constructor(props){
        super(props);
        this.state={
            orderItems:[],
            bookList:[],
            showBookList:[],
            totalPrice:0,
            totalNumber:0,
        };
    }
    componentDidMount() {
        this.fetchOrder();
        setTimeout(() => this.fetchBook(), 100);
    };

    fetchBook = () => {
        const callback =  (data) => {
            let bookList = new Array(data.length);
            let totalPrice=0;
            let totalNumber=0;
            for(let book of data){
                bookList[book.bookId-1]={
                    bookName:book.bookName,
                    imageUrl:book.imageUrl,
                    author:book.author,
                    bookNumber:0
                };
            }
            for(let orderitem of this.state.orderItems){
                bookList[orderitem.bookId-1].bookNumber+=orderitem.bookNumber;
                totalPrice+=orderitem.bookNumber*orderitem.price;
                totalNumber+=orderitem.bookNumber;
            }
            let showBookList=JSON.parse(JSON.stringify(bookList));//deep copy!!!
            this.setState({
                bookList:bookList,
                showBookList:showBookList.sort(function(a, b){return b.bookNumber - a.bookNumber}),
                totalNumber:totalNumber,
                totalPrice:totalPrice
            });
        };
        getBooks({"search":null}, callback);
    }

    fetchOrder = () => {
        const callback =  (data) => {
            let orderItemList=[];
            for (let order of data){
                for(let item of order.orderItemList){
                    orderItemList.push({
                        bookId:item.bookId,
                        bookNumber:item.bookNumber,
                        price:item.price,
                        orderDate:order.time.substring(0,10),
                    });
                }
            }
            this.setState({
                orderItems:orderItemList,
            });
        };
        orderService.getOrder(callback);
    }


    timeChange = (_, dateString) => {      
        const startTime = new Date(Date.parse(dateString[0]));
        const endTime = new Date(Date.parse(dateString[1]));
        let arr = [];
        for (let orderitem of this.state.orderItems) {
            let time = new Date(Date.parse(orderitem.orderDate));
            if((startTime===''|| time >= startTime) && (endTime==='' || time <= endTime)){
                arr.push(orderitem);
            }
        }
        let newBookList=JSON.parse(JSON.stringify(this.state.bookList));
        let totalPrice=0;
        let totalNumber=0;
        for(let book of newBookList){
            book.bookNumber=0;
        }
        for(let orderitem of arr){
            newBookList[orderitem.bookId-1].bookNumber+=orderitem.bookNumber;
            totalPrice+=orderitem.bookNumber*orderitem.price;
            totalNumber+=orderitem.bookNumber;
        }
        newBookList.sort(function(a, b){return  b.bookNumber - a.bookNumber});
        this.setState({
            showBookList:newBookList,
            totalNumber:totalNumber,
            totalPrice:totalPrice
        });
    }

    render(){
        const rows = [];
            this.state.showBookList.map((item,idx) => {
                rows.push(
                    <div>
                        <br/>
                        <div className="Cart-Items">
                            <div className="image-box">
                                <img src={item.imageUrl} className="cart-pic"/>
                            </div>
                            <div className="about">
                                <h1 className="title">{item.bookName}</h1>
                                <h3 className="subtitle">{item.author}</h3>
                            </div>
                            <div className="prices">
                                <div className="amount">Rank:{idx+1} Sales:{item.bookNumber} </div>
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
                <div className="total">
                    <div>
                    </div>
                    <div className="total-amount">{this.state.totalNumber} items Total Price: ${(this.state.totalPrice/100).toFixed(2)}</div>
                </div>
                <br/>
            </div>
        );
    };
}
