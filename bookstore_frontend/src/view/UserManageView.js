import React from 'react';
import UserTable from "../components/UserTable";
import Footer from '../components/Footer';
import {Nav} from '../components/Nav';

class UserManageView extends React.Component {
    render() {
        return (
            <div>
                <Nav/>
                <div className="OrderList">
                    <h2 className="OrderHeading">User Management</h2>
                    <UserTable/>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default UserManageView;