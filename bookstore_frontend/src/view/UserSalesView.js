import React from 'react';
import Footer from '../components/Footer';
import {Nav} from '../components/Nav';
import { UserSalesTable } from '../components/UserSalesTable';

class UserSalesView extends React.Component{
    render(){
        return(
            <div>
                <Nav/>
                <div className="OrderList">
                    <h2 className="OrderHeading">User Sales</h2>
                    <UserSalesTable/>
                </div>
                <Footer/>
            </div>
        );
    }
}
export default UserSalesView;