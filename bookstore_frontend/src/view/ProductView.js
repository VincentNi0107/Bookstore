import React from 'react';
import Footer from '../components/Footer';
import {Nav} from '../components/Nav';
import '../styles/product.css';
import card1 from '../assets/card1-1.png';
import card2 from '../assets/card1-2.png';
import card3 from '../assets/card1-3.png';
import card4 from '../assets/card1-4.png';
import {withRouter} from "react-router-dom";
import { getBook } from '../services/bookService';
import * as cartService from '../services/cartService';
import {message} from 'antd';


const images=[card1,card2,card3,card4];
const prices=['$2','$4','$10','$5'];
const originPrices=['$4','$8','$20','$10'];
class ProductView extends React.Component{
    constructor(props){
        super(props);
        this.state={
            bookId:null,
            backgroundImage:images[0],
            active:0,
            checked:0,
            prices:prices,
            originPrices:originPrices,
            bookInfo: {}
        };
    }
    componentDidMount(){
        const query = this.props.location.search;
        const arr = query.split('&');
        const bookId = arr[0].substr(4);
        const callback =  (data) => {
            console.log(data);
            this.setState({bookInfo:data,bookId:bookId});
         };
        getBook(bookId, callback);

    }

    changeActiveimage=(e)=>{
        let idx=parseInt(e.target.dataset.idx,10);
        this.setState({
            active:idx,
            backgroundImage:images[idx],
        });
    }
    
    changeVersion=(e)=>{
        let idx=parseInt(e.target.dataset.idx,10);
        this.setState({
            checked:idx,
        });
    }

    addToCart=(e)=>{
        const callback = (data) => {
            if(data.status >= 0) {
                message.success(data.msg);
            }
            else{
                message.error(data.msg);
            }
        };
        cartService.addCartItem(this.state.bookId,callback);
    }

    render(){
        let discount= Math.trunc((1-this.state.bookInfo.price/this.state.bookInfo.originPrice)*100);
        return(
            <div>
                <Nav/>
                <section className="product-details">
                    <div className="image-slider" style={{ backgroundImage: `url(${this.state.bookInfo.imageUrl})` }}>
                        <div className="product-images">
                            <img src={this.state.bookInfo.imageUrl} data-idx='0' onClick={this.changeActiveimage} className={this.state.active===0?"active":null} alt=""/>
                            <img src={this.state.bookInfo.imageUrl} data-idx='1' onClick={this.changeActiveimage} className={this.state.active===1?"active":null} alt=""/>
                            <img src={this.state.bookInfo.imageUrl} data-idx='2' onClick={this.changeActiveimage} className={this.state.active===2?"active":null} alt=""/>
                            <img src={this.state.bookInfo.imageUrl} data-idx='3' onClick={this.changeActiveimage} className={this.state.active===3?"active":null} alt=""/>
                        </div>
                    </div>
                    <div className="details">
                        <br/>
                        <br/>
                        <br/>
                        <h2 className="product-brand">{this.state.bookInfo.bookName}</h2>
                        <p className="product-short-des">by {this.state.bookInfo.author}</p>
                        <span className="product-price">${this.state.bookInfo.price}</span>
                        <span className="product-actual-price">${this.state.bookInfo.originPrice}</span>
                        <span className="product-discount">( {discount}% off )</span>
                
                        <p className="product-detail-info">ISBN: {this.state.bookInfo.isbn}</p>
                        <p className="product-detail-info">Inventory: {this.state.bookInfo.inventory}</p>

                
                        <button className="btn cart-btn" onClick={this.addToCart}>add to cart</button>
                    </div>
                </section>
                <section className="detail-des">
                    <h2 className="headingp">Description</h2>
                    <p className="des">
                        <span>
                            {this.state.bookInfo.description}
                        </span>
                    </p>
                </section>
                <Footer/>
            </div>
        );
    }
}
export default withRouter(ProductView);