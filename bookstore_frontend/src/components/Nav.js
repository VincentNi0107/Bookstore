import '../styles/nav.css'
import darklogo from '../assets/dark-logo.png';
import avater from '../assets/user.png';
import cart from '../assets/cart.png';
import React from "react";
import {Link} from 'react-router-dom'
import { Menu, Dropdown, Space } from 'antd';
import { DownOutlined, SmileOutlined } from '@ant-design/icons';
import * as userService from '../services/userService';


export class Nav extends React.Component{
    constructor(props){
        super(props);        
        this.state={
            filterText:'',
        };
    }
    handleFilterTextChange = (e) =>{
        this.setState({
            filterText:e.target.value
        });
    }

    render(){
        const user = JSON.parse(localStorage.getItem("user"));
        const menu = (
            <Menu
              items={[
                {
                    label: (
                        <span>
                        Welcome, {user.username}!
                        </span>
                    ),
                    icon: <SmileOutlined />,
                },
                {
                    danger: true,
                    label: (
                    <a href="#" onClick={userService.logout}>
                        Log Out
                    </a>
                ),
                },
              ]}
            />
          );
        return(
            <nav className="navbar">
                <div className="nav">
                    <img src={darklogo} className="brand-logo" alt=""/>
                    <div className="nav-items">
                        <div className="search">
                            <input type="text" className="search-box" placeholder="Search new books" value={this.state.filterText}  onChange={this.handleFilterTextChange}/>
                        <Link to={{
                            pathname: '/search',
                            search: '?filterText=' + this.state.filterText}}
                            className="search-btn">
                            <span>Search</span>
                        </Link>
                        </div>
                        <Dropdown overlay={menu} placement="bottom">
                            <a><img src={avater} alt=""/></a>
                        </Dropdown>
                        <Link to={"/cart"}><a href="#"><img src={cart} alt=""/></a></Link>
                    </div>
                </div>
                <ul className="links-container">
                <li className="link-item"><Link to={"/"} className="link">Home</Link></li>
                {/* <li className="link-item"><a href="/signup" className="link">Registry</Link></li> */}
                <li className="link-item"><Link to={"/search"} className="link">Books</Link></li>
                <li className="link-item"><Link to={"/order"} className="link">Orders</Link></li>
                <li className="link-item"><Link to={"/cart"} className="link">Cart</Link></li>
                {/* <li className="link-item"><a href="/product" className="link">Product</a></li> */}
                </ul>
            </nav>

        );
    }

}
