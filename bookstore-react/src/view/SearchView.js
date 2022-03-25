import '../styles/home.css';
import '../styles/search.css';
import Footer from '../components/Footer';
import {Nav} from '../components/Nav';
import {Card} from '../components/Card';
import React from 'react';

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

export class SearchView extends React.Component{
    constructor(props){
        super(props);
        this.state={
            filterText: '',
            newFilterText:'',
            edit:null,
            products:PRODUCTS,
        };
        this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
        this.handleFilterButton=this.handleFilterButton.bind(this);
        this.handleShowEditor=this.handleShowEditor.bind(this);
        this.handleSave=this.handleSave.bind(this);
    }
    handleFilterTextChange(filterText) {
        this.setState({
            newFilterText: filterText
        });
    }

    handleFilterButton(){
        this.setState({
            filterText:this.state.newFilterText
        });
    }
    handleShowEditor(e){
        this.setState({
            edit:{
                idx:parseInt(e.idx,10),
                cate:e.cate,
            }
        });
    }
    handleSave(input){
        let data = this.state.products.slice();
        switch(this.state.edit.cate){
            case 'title':
                data[this.state.edit.idx].title=input.value;
                break;
            case 'author':
                data[this.state.edit.idx].author=input.value;
                break;
            case 'price':
                data[this.state.edit.idx].price=input.value;
                break;
            case 'originPrice':
                data[this.state.edit.idx].originPrice=input.value;
                break;
            default:
                break;
        }
        this.setState({
            edit:null,
            products:data,
        });
    }
    render(){
        return(
            <div>
                <Nav filterText={this.state.newFilterText} onFilterTextChange={this.handleFilterTextChange} onButtonClick={this.handleFilterButton} />
                <section className="search-results">
                <h2 className="heading">Search Results for <span>{this.state.filterText}</span></h2>
                <Card products={this.state.products} filterText={this.state.filterText} onEdit={this.handleShowEditor} edit={this.state.edit} onSave={this.handleSave}/>
                </section>
                <Footer/>
            </div>
        );
    }
}