import '../styles/nav.css'
import darklogo from '../assets/dark-logo.png';
import user from '../assets/user.png';
import cart from '../assets/cart.png';
import React from "react";
import {BrowserRouter as Link} from "react-router-dom";

export class Nav extends React.Component{
    constructor(props){
        super(props);        
        this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
        this.handleFilterButton=this.handleFilterButton.bind(this);
    }
    handleFilterTextChange(e) {
        this.props.onFilterTextChange(e.target.value);
    }
    handleFilterButton(){
        this.props.onButtonClick();
    }

    render(){
        return(
            <nav className="navbar">
                <div className="nav">
                    <img src={darklogo} className="brand-logo" alt=""/>
                    <div className="nav-items">
                        <div className="search">
                            <input type="text" className="search-box" placeholder="Search new books" value={this.props.filterText} onChange={this.handleFilterTextChange}/>
                            <button className="search-btn" onClick={this.handleFilterButton}>Search</button>
                        </div>
                        <a href="#"><img src={user} alt=""/></a>
                        <a href="#"><img src={cart} alt=""/></a>
                    </div>
                </div>
                <ul className="links-container">
                <li className="link-item"><a href="/" className="link">Home</a></li>
                <li className="link-item"><a href="/signup" className="link">Registry</a></li>
                <li className="link-item"><a href="/search" className="link">Search</a></li>
                <li className="link-item"><a href="/cart" className="link">Cart</a></li>
                <li className="link-item"><a href="/product" className="link">Product</a></li>
                </ul>
            </nav>

        );
    }

}
