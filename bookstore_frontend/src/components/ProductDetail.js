import React from 'react';
import '../styles/product.css';
import * as cartService from '../services/cartService';
import { message } from 'antd';


class ProductDetail extends React.Component{
    constructor(props){
        super(props);
        this.state={
            active:0,
            checked:0,
        };
    }

    changeActiveimage=(e)=>{
        let idx=parseInt(e.target.dataset.idx,10);
        this.setState({
            active:idx,
            // backgroundImage:images[idx],
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
        cartService.addCartItem(this.props.bookId,callback);
    }

    render(){
        let discount= Math.trunc((1-this.props.bookInfo.price/this.props.bookInfo.originPrice)*100);
        return(
            <div>
                <section className="product-details">
                    <div className="image-slider" style={{ backgroundImage: `url(${this.props.bookInfo.imageUrl})` }}>
                        <div className="product-images">
                            <img src={this.props.bookInfo.imageUrl} data-idx='0' onClick={this.changeActiveimage} className={this.state.active===0?"active":null} alt=""/>
                            <img src={this.props.bookInfo.imageUrl} data-idx='1' onClick={this.changeActiveimage} className={this.state.active===1?"active":null} alt=""/>
                            <img src={this.props.bookInfo.imageUrl} data-idx='2' onClick={this.changeActiveimage} className={this.state.active===2?"active":null} alt=""/>
                            <img src={this.props.bookInfo.imageUrl} data-idx='3' onClick={this.changeActiveimage} className={this.state.active===3?"active":null} alt=""/>
                        </div>
                    </div>
                    <div className="details">
                        <br/>
                        <br/>
                        <br/>
                        <h2 className="product-brand">{this.props.bookInfo.bookName}</h2>
                        <p className="product-short-des">by {this.props.bookInfo.author}</p>
                        <span className="product-price">${(this.props.bookInfo.price/100).toFixed(2)}</span>
                        <span className="product-actual-price">${(this.props.bookInfo.originPrice/100).toFixed(2)}</span>
                        <span className="product-discount">( {discount}% off )</span>
                
                        <p className="product-detail-info">ISBN: {this.props.bookInfo.isbn}</p>
                        <p className="product-detail-info">Inventory: {this.props.bookInfo.inventory}</p>

                
                        <button className="btn cart-btn" onClick={this.addToCart}>add to cart</button>
                    </div>
                </section>
                <section className="detail-des">
                    <h2 className="headingp">Description</h2>
                    <p className="des">
                        <span>
                            {this.props.bookInfo.description}
                        </span>
                    </p>
                </section>
            </div>
        );
    }
}
export default ProductDetail;