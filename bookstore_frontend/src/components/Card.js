import React from 'react';
import {Link} from 'react-router-dom'
import {getBooks} from "../services/bookService";

export class Card extends React.Component{
    constructor(props){
        super(props);
        this.state={
            products:[]
        };
    }

    componentDidMount() {
        const callback =  (data) => {
           this.setState({products:data});
        };
        getBooks({"search":null}, callback);
    }

    render(){
        const rows = [];
        const filterText = this.props.filterText;
        this.state.products.map((product,idx) => {
            if (product.bookName.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
                return;
            }
            let contentTitle=(<h2 className="product-brand" data-cate='title' data-idx={idx}>{product.bookName}</h2>);
            let contentAuthor=(<p className="product-short-des" data-idx={idx} data-cate="author">{product.author}</p>);
            let contentPrice=(<span className="price" data-idx={idx} data-cate="price">${(product.price/100).toFixed(2)}</span>);
            let contentOP=(<span className="actual-price" data-idx={idx} data-cate="originPrice">${(product.originPrice/100).toFixed(2)}</span>);
            let discount= Math.trunc((1-product.price/product.originPrice)*100);
            rows.push(
                <div className="product-card" key={idx}>
                    <div className="product-image">
                        <span className="discount-tag">{discount}% off</span>
                        <img src={product.imageUrl} className="product-thumb" alt=""/>
                        <Link to={{
                            pathname: '/product',
                            search: '?id=' + product.bookId}}
                        >
                        <button className="card-btn">See Details</button>
                        </Link>
                    </div>
                    <div className="product-info">
                        {contentTitle}
                        {contentAuthor}
                        {contentPrice}
                        {contentOP}
                    </div>
                </div>
            );
        });
        return(
            <div className="product-container">
                {rows}
            </div>      
            );
    }
}