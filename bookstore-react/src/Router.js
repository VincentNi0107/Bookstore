import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { HomeView } from './view/HomeView';
import { SearchView } from './view/SearchView';
import { LoginView } from './view/LoginView';
import { SignupView } from './view/SignupView';
import { OrderView } from './view/OrderView';
import { ProductView } from './view/ProductView';

class BasicRoute extends React.Component{
    render(){
        return(
            <Router>
                <Switch>
                    <Route path="/product" component={ProductView}/>
                    <Route path="/cart" component={OrderView}/>
                    <Route path="/login" component={LoginView}/>
                    <Route path="/signup" component={SignupView}/>
                    <Route path="/search" component={SearchView}/>
                    <Route path="/" component={HomeView}/>
                </Switch>
            </Router>
        )
    }
}
export default BasicRoute;