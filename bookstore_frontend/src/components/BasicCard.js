import React, { useRef } from 'react';
import arrow from '../assets/arrow.png';
import {Link} from 'react-router-dom'

function BasicCard(props){
        const ref = useRef(null);
        const rows = [];
        props.products.forEach((product) => {  
            let discount= Math.trunc((1-product.price/product.originPrice)*100);
            rows.push(
                <div className="product-card">
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
                        <h2 className="product-brand">{product.bookName}</h2>
                        <p className="product-short-des">{product.author}</p>
                        <span className="price">${(product.price/100).toFixed(2)}</span>
                        <span className="actual-price">${(product.originPrice/100).toFixed(2)}</span>
                    </div>
                </div>
            );
        });
        const scrollLeft = () => {
            ref.current.scrollLeft -= 290;
          };
          const scrollRight = () => {
            ref.current.scrollLeft += 290;
          };
        return(
            <section className="product">
                <h2 className="product-category">Top-Selling Books</h2>
                <button className="pre-btn" onClick={scrollLeft}><img src={arrow} alt=""/></button>
                <button className="nxt-btn" onClick={scrollRight}><img src={arrow} alt=""/></button>
                <div className="basic-product-container" ref={ref}>
                    {rows}
                </div>    
            </section>  
            );
}export default BasicCard;
