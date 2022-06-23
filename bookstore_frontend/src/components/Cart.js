import React from 'react';
import * as cartService from '../services/cartService';
import {message,Result, Button} from 'antd';
import {Link} from 'react-router-dom'

export class Cart extends React.Component{
    constructor(props){
        super(props);
        this.state={
            CartItem:[],
            Success:0,
            OrderInfo:{}
        };
    }
    componentDidMount() {
        this.fetchCart();
    }

    fetchCart = () => {
        const callback =  (data) => {
            this.setState({CartItem:data});
        };
        cartService.getCart(callback);
    }
    
    deleteItem = (e) => {
        const callback = (data) => {
            console.log(data);
            if(data.status<0){
                message.error(data.msg);
            }
        };
        console.log(e.target.dataset);
        cartService.deleteCartItem(e.target.dataset.bookid,callback);
        setTimeout(() => this.fetchCart(), 100);
    }

    decreaseAmount = (e) => {
        const callback = (data) => {
            console.log(data);
            if(data.status<0){
                message.error(data.msg);
            }
        };
        cartService.decreaseCartItem(e.target.dataset.bookid,callback);
        setTimeout(() => this.fetchCart(), 100);
    }

    addAmount = (e) => {
        const callback = (data) => {
            console.log(data);
            if(data.status<0){
                message.error(data.msg);
            }
        };
        cartService.addCartItem(e.target.dataset.bookid,callback);
        setTimeout(() => this.fetchCart(), 100);
    }

    deleteAll = () => {
        const callback = (data) => {
            console.log(data);
            if(data.status<0){
                message.error(data.msg);
            }
        };
        cartService.deleteAllCart(callback);
        setTimeout(() => this.fetchCart(), 100);
    }

    checkOut = () => {
        let items=[];
        for(let item of this.state.CartItem){
            items.push({
                bookId:item.book.bookId,
                bookNumber:item.amount
            });
        }
        let requestBody = {
            orderItemList: items
        };
        const callback =  (data) => {
            if(data.orderItem.length>0){
                this.setState({OrderInfo:data,Success:1,CartItem:[]});
                message.success("Order success!");
            }
            else{
                message.error("All Books out of Inventory!");
            }
        };
        if(items.length===0){
            message.error("The Cart is empty!");
        }
        else{
            cartService.checkOut(requestBody,callback);
        }
    };

    render(){
        let cart=null;
        if(!this.state.Success){
            const rows = [];
            let sumOfPrice=0;
            this.state.CartItem.map((item,idx) => {
                sumOfPrice+=item.book.price*item.amount;
                rows.push(
                    <div className="Cart-Items">
                        <div className="image-box">
                            <img src={item.book.imageUrl} className="cart-pic"/>
                        </div>
                        <div className="about">
                            <h1 className="title">{item.book.bookName}</h1>
                            <h3 className="subtitle">{item.book.author}</h3>
                        </div>
                        <div className="counter">
                            <div className="cartbtn" data-bookId={item.book.bookId} onClick={this.addAmount}>+</div>
                            <div className="count">{item.amount}</div>
                            <div className="cartbtn" data-bookId={item.book.bookId} onClick={this.decreaseAmount}>-</div>
                        </div>
                        <div className="prices">
                            <div className="amount">${(item.book.price*item.amount/100).toFixed(2)}</div>
                            <div className="remove"><u data-bookId={item.book.bookId} onClick={this.deleteItem}>Remove</u></div>
                        </div>
                    </div>
                );
            });
            cart=(
                <div>
                    <div className="Header">
                        <h3 className="Heading">Shopping Cart</h3>
                        <h5 className="Action" onClick={this.deleteAll}>Remove all</h5>
                    </div>
                    {rows}
                    <hr/> 
                    <div className="checkout">
                        <div className="total">
                            <div>
                                <div className="Subtotal">Sub-Total</div>
                                <div className="items">{this.state.CartItem.length} items</div>
                            </div>
                            <div className="total-amount">${(sumOfPrice/100).toFixed(2)}</div>
                        </div>
                        <button className="button" onClick={this.checkOut}>Checkout</button>
                    </div>
                </div>
            );
        }
        else{
            let totalPrice=0;
            let totalNum=0;
            this.state.OrderInfo.orderItem.map((item,idx) => {
                totalPrice+=item.book.price*item.bookNumber;
                totalNum+=item.bookNumber;
            });
            let title="Successfully Purchased "+totalNum+" Books";
            let subTitle="Order time: "+this.state.OrderInfo.time+"    Total cost: $"+(totalPrice/100).toFixed(2);
            cart=(
                <Result
                    status="success"
                    title={title}
                    subTitle={subTitle}
                    extra={[
                    <Button type="primary" key="console" onClick={()=>{this.setState({Success:0});}}>
                        Confirm
                    </Button>,
                    <Link to={"/order"}><Button key="buy">See Orders</Button></Link>,
                    ]}
                />
            );
        }
        return(
            <div className="CartContainer">
                {cart}
            </div>
        );
    }
}
