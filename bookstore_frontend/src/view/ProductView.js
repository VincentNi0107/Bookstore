import React from 'react';
import Footer from '../components/Footer';
import {Nav} from '../components/Nav';
import '../styles/product.css';
import {withRouter} from "react-router-dom";
import { getBook } from '../services/bookService';
import ProductDetail from '../components/ProductDetail';

class ProductView extends React.Component{
    constructor(props){
        super(props);
        this.state={
            bookId:null,
            bookInfo: {}
        };
    }
    componentDidMount(){
        const query = this.props.location.search;
        const arr = query.split('&');
        const bookId = arr[0].substr(4);
        const callback =  (data) => {
            this.setState({bookInfo:data,bookId:bookId});
         };
        getBook(bookId, callback);

    }

    render(){
        return(
            <div>
                <Nav/>
                <ProductDetail bookInfo={this.state.bookInfo} bookId={this.state.bookId}/>
                <Footer/>
            </div>
        );
    }
}
export default withRouter(ProductView);