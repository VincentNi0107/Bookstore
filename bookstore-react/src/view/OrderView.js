import React from 'react';
import '../styles/order.css'
import book1 from '../assets/card1-1.png';
import Footer from '../components/Footer';
import {Nav} from '../components/Nav';
export class OrderView extends React.Component{
    render(){
        return(<div>
            <Nav/>
            <div className="CartContainer">
                <div className="Header">
                    <h3 className="Heading">Shopping Cart</h3>
                    <h5 className="Action">Remove all</h5>
                </div>
                <div className="Cart-Items">
                    <div className="image-box">
                        <img src={book1} className="cart-pic"/>
                    </div>
                    <div className="about">
                        <h1 className="title">Life Force</h1>
                        <h3 className="subtitle">PDF version</h3>
                    </div>
                    <div className="counter">
                        <div className="cartbtn">+</div>
                        <div className="count">1</div>
                        <div className="cartbtn">-</div>
                    </div>
                    <div className="prices">
                        <div className="amount">$2.99</div>
                        <div className="remove"><u>Remove</u></div>
                    </div>
                </div>

                <div className="Cart-Items pad">
                    <div className="image-box">
                    <img src={book1} className="cart-pic"/>
                    </div>
                    <div className="about">
                        <h1 className="title">Life Force</h1>
                        <h3 className="subtitle">PDF version</h3>
                    </div>
                    <div className="counter">
                        <div className="cartbtn">+</div>
                        <div className="count">1</div>
                        <div className="cartbtn">-</div>
                    </div>
                    <div className="prices">
                        <div className="amount">$3.19</div>
                        <div className="remove"><u>Remove</u></div>
                    </div>
                </div>
                <hr/> 
                <div className="checkout">
                    <div className="total">
                        <div>
                            <div className="Subtotal">Sub-Total</div>
                            <div className="items">2 items</div>
                        </div>
                        <div className="total-amount">$6.18</div>
                    </div>
                    <button className="button">Checkout</button></div>
                </div>
            <Footer/>
            </div>
        );
    }
}