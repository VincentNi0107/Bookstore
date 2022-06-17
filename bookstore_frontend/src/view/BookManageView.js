import React from 'react';
import { BookSalesTable } from '../components/BookManageTable';
import Footer from '../components/Footer';
import {Nav} from '../components/Nav';

class BookManageView extends React.Component {
    render() {
        return (
            <div>
                <Nav/>
                <div className="OrderList">
                    <h2 className="OrderHeading">Book Management</h2>
                    <BookSalesTable/>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default BookManageView;