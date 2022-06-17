import React from 'react';
import '../styles/cart.css'
import Footer from '../components/Footer';
import {Nav} from '../components/Nav';
import {withRouter} from "react-router-dom";
import {Cart} from '../components/Cart';

class OrderView extends React.Component{
    render(){
        return(
        <div>
            <Nav/>
            <Cart/>
            <Footer/>
        </div>
        );
    }
}
export default withRouter(OrderView);