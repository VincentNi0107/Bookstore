import '../styles/home.css';
import '../styles/search.css';
import Footer from '../components/Footer';
import {SearchNav} from '../components/SearchNav';
import {Card} from '../components/Card';
import React from 'react';
import {getBooks} from "../services/bookService";
import {withRouter} from "react-router-dom";


class SearchView extends React.Component{
    constructor(props){
        super(props);
        this.state={
            filterText: '',
            newFilterText:'',
            edit:null,
            products:[],
        };
        this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
        this.handleFilterButton=this.handleFilterButton.bind(this);
        this.handleShowEditor=this.handleShowEditor.bind(this);
        this.handleSave=this.handleSave.bind(this);
    }
    componentDidMount() {

        const callback =  (data) => {
           this.setState({products:data});
        };

        getBooks({"search":null}, callback);
        const query = this.props.location.search;
        if(query){
            const arr = query.split('&');
            const filterText = arr[0].substr(12);
            this.setState({filterText:filterText});
            this.props.location.search='';
        }
        
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
                data[this.state.edit.idx].bookName=input.value;
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
                <SearchNav filterText={this.state.newFilterText} onFilterTextChange={this.handleFilterTextChange} onButtonClick={this.handleFilterButton} />
                <section className="search-results">
                <h2 className="heading">Search Results for <span>{this.state.filterText}</span></h2>
                <Card products={this.state.products} filterText={this.state.filterText} onEdit={this.handleShowEditor} edit={this.state.edit} onSave={this.handleSave}/>
                </section>
                <Footer/>
            </div>
        );
    }
}
export default withRouter(SearchView);