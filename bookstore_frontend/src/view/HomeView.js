import Footer from '../components/Footer';
import {Nav} from '../components/Nav';
import React from 'react';
import BasicCard from '../components/BasicCard';
import '../styles/home.css';
import {getBooks} from "../services/bookService";
import {withRouter} from "react-router-dom";

class HomeView extends React.Component{
    constructor(props){
        super(props);
        this.state={
            products:[],
        };
    }

    componentDidMount() {
        const callback =  (data) => {
           this.setState({products:data});
        };
        getBooks({"search":null}, callback);
    }

    render(){
        return(
            <div>
                <Nav/>
                <header className="hero-section">
                    <div className="content">
                        <img src={require('../assets/light-logo.png')} className="logo" alt=""/>
                        <p className="sub-heading">Discover your next favorite read</p>
                    </div>
                </header>
                <BasicCard products={this.state.products}/>
                <Footer/>
            </div>
        );
    }
}
export default withRouter(HomeView);