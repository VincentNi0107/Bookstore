import React from 'react';
import '../styles/order.css'
import book1 from '../assets/card1-1.png';
import Footer from '../components/Footer';
import {Nav} from '../components/Nav';
import {withRouter} from "react-router-dom";
import {OrderList} from '../components/OrderList';

class OrderView extends React.Component{
    render(){
        return(
        <div>
            <Nav/>
            <br/>
            <div className="OrderList">
                <h2 className="OrderHeading">Order List</h2>
                <OrderList/> 
            </div>
            <br/>
            <br/>
            <br/>
            <Footer/>
        </div>
        );
    }
}
export default withRouter(OrderView);