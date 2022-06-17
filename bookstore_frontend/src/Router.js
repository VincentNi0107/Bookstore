import React from 'react';
import 'antd/dist/antd.css';
// import {BrowserRouter as Router, Switch} from 'react-router-dom';
import { Router, Route, Switch, Redirect} from 'react-router-dom';
import HomeView from './view/HomeView';
import SearchView from './view/SearchView';
import LoginView from './view/LoginView';
import { SignupView } from './view/SignupView';
import OrderView from './view/OrderView';
import CartView from './view/CartView';
import ProductView from './view/ProductView';
import UserManageView from './view/UserManageView';
import BookSalesView from './view/BookSalesView';
import UserSalesView from './view/UserSalesView';
import BookManageView from './view/BookManageView';
import PrivateRoute from './PrivateRoute'
import LoginRoute from  './LoginRoute'
import {history} from "./utils/history";

class BasicRoute extends React.Component{

    constructor(props) {
        super(props);

        history.listen((location, action) => {
            // clear alert on location change
            console.log(location,action);
        });
    }

    render(){
        return(
            <Router history={history}>
                <Switch>
                    <PrivateRoute exact path="/" component={HomeView}/>
                    <PrivateRoute exact path="/product" component={ProductView}/>
                    <PrivateRoute exact path="/order" component={OrderView}/>
                    <PrivateRoute exact path="/cart" component={CartView}/>
                    <PrivateRoute exact path="/booksales" component={BookSalesView}/>
                    <PrivateRoute exact path="/usersales" component={UserSalesView}/>
                    <PrivateRoute exact path="/usermanage" component={UserManageView}/>
                    <PrivateRoute exact path="/bookmanage" component={BookManageView}/>
                    <LoginRoute exact path="/login" component={LoginView}/>
                    {/* <Route path="/signup" component={SignupView}/> */}
                    <PrivateRoute exact path="/search" component={SearchView}/>
                    <Redirect from="/*" to="/" />
                </Switch>
            </Router>
        )
    }
}
export default BasicRoute;