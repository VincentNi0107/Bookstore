import React from 'react';
import { BookSalesTable } from '../components/BookSalesTable';
import Footer from '../components/Footer';
import {Nav} from '../components/Nav';

class BookSalesView extends React.Component {
    render() {
        return (
            <div>
                <Nav/>
                <div className="OrderList">
                    <h2 className="OrderHeading">Book Sales</h2>
                    <BookSalesTable/>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default BookSalesView;