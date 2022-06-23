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
        };
        this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
        this.handleFilterButton=this.handleFilterButton.bind(this);
    }
    componentDidMount() {
        const query = this.props.location.search;
        if(query){
            const arr = query.split('&');
            const filterText = arr[0].substr(12);
            this.setState({
                filterText:filterText,
                newFilterText:filterText
            });
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

    render(){
        return(
            <div>
                <SearchNav filterText={this.state.newFilterText} onFilterTextChange={this.handleFilterTextChange} onButtonClick={this.handleFilterButton} />
                <section className="search-results">
                <h2 className="heading">Search Results for <span>{this.state.filterText}</span></h2>
                <Card filterText={this.state.filterText}/>
                </section>
                <Footer/>
            </div>
        );
    }
}
export default withRouter(SearchView);