import Footer from '../components/Footer';
import {Nav} from '../components/Nav';
import React from 'react';
import BasicCard from '../components/BasicCard';
import '../styles/home.css';

const PRODUCTS = [
    {title: 'Life Force', price: '$20', author: 'Tony Robbins',picture:require('../assets/card1-1.png'),originPrice:'$40',discount:'50'},
    {title: 'Chicka Chicka Boom Boom', price: '$10', author: 'Bill Martin Jr.',picture:require('../assets/card2-1.png'),originPrice:'$15',discount:'33'},
    {title: 'The Handmaid\'s Tale', price: '$10', author: 'Margaret Atwood',picture:require('../assets/card3-1.png'),originPrice:'$15',discount:'33'},
    {title: 'The Handmaid\'s Tale', price: '$10', author: 'Margaret Atwood',picture:require('../assets/card3-1.png'),originPrice:'$15',discount:'33'},
    {title: 'The Handmaid\'s Tale', price: '$10', author: 'Margaret Atwood',picture:require('../assets/card3-1.png'),originPrice:'$15',discount:'33'},
    {title: 'The Handmaid\'s Tale', price: '$10', author: 'Margaret Atwood',picture:require('../assets/card3-1.png'),originPrice:'$15',discount:'33'},
    {title: 'The Handmaid\'s Tale', price: '$10', author: 'Margaret Atwood',picture:require('../assets/card3-1.png'),originPrice:'$15',discount:'33'},
    {title: 'The Handmaid\'s Tale', price: '$10', author: 'Margaret Atwood',picture:require('../assets/card3-1.png'),originPrice:'$15',discount:'33'},
    {title: 'The Handmaid\'s Tale', price: '$10', author: 'Margaret Atwood',picture:require('../assets/card3-1.png'),originPrice:'$15',discount:'33'},

];
export class HomeView extends React.Component{
    constructor(props){
        super(props);
        this.state={
            products:PRODUCTS,
        };
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