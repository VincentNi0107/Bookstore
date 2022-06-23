import '../styles/nav.css'
import darklogo from '../assets/dark-logo.png';
import avater from '../assets/user.png';
import cart from '../assets/cart.png';
import React from "react";
import {Link} from 'react-router-dom'
import { Menu, Dropdown, Space } from 'antd';
import { DownOutlined, SmileOutlined } from '@ant-design/icons';
import * as userService from '../services/userService';


export class SearchNav extends React.Component{
    constructor(props){
        super(props);        
        this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
        this.handleFilterButton=this.handleFilterButton.bind(this);
        this.state={
            filterText:'',
            admin: false,
        };
    }


    componentDidMount() {
        const user = JSON.parse(localStorage.getItem("user"));
        if(user && user.userType === 'admin'){
            this.setState({admin: true})
        }
    }

    handleFilterTextChange(e) {
        this.props.onFilterTextChange(e.target.value);
    }
    handleFilterButton(){
        this.props.onButtonClick();
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
                            <input type="text" className="search-box" placeholder="Search new books" value={this.props.filterText} onChange={this.handleFilterTextChange}/>
                            <button className="search-btn" onClick={this.handleFilterButton}>Search</button>
                        </div>
                        <Dropdown overlay={menu} placement="bottom">
                            <a><img src={avater} alt=""/></a>
                        </Dropdown>
                        <Link to={"/cart"}><a href="#"><img src={cart} alt=""/></a></Link>
                    </div>
                </div>
                <ul className="links-container">
                <li className="link-item"><Link to={"/"} className="link">Home</Link></li>
                <li className="link-item"><Link to={"/search"} className="link">Books</Link></li>
                <li className="link-item"><Link to={"/order"} className="link">Orders</Link></li>
                <li className="link-item"><Link to={"/cart"} className="link">Cart</Link></li>
                {(this.state.admin)?
                    (
                        <li className="link-item"><Link to={"/usermanage"} className="link">UserManage</Link></li>
                    ):
                    (<div/>)
                }
                {(this.state.admin)?
                    (
                        <li className="link-item"><Link to={"/bookmanage"} className="link">BookManage</Link></li>
                    ):
                    (<div/>)
                }
                {(this.state.admin)?
                    (
                        <li className="link-item"><Link to={"/usersales"} className="link">UserSales</Link></li>
                        ):
                    (<div/>)
                }      
                <li className="link-item"><Link to={"/booksales"} className="link">BookSales</Link></li>
                </ul>
            </nav>

        );
    }

}
