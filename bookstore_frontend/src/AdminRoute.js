import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import * as userService from "./services/userService";

export class LoginRoute extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            isAuthed: false,
            hasAuthed: false,
            admin:false,
        }
    }

    checkAuth = (data) => {
        if (data.status >= 0) {
            if(data.data.userType==='admin'){
                this.setState({isAuthed: true, hasAuthed: true, admin: true});
            }
            else{
                this.setState({isAuthed: true, hasAuthed: true, admin: false});
            }
        } else {
            localStorage.removeItem('user');
            this.setState({isAuthed: false, hasAuthed: true});
        }
    };


    componentDidMount() {
        userService.checkSession(this.checkAuth);
    }


    render() {

        const {component: Component, path="/",exact=false,strict=false} = this.props;

        console.log(this.state.admin);

        if (!this.state.hasAuthed) {
            return null;
        }

        return <Route path={path} exact={exact} strict={strict} render={props => (
            this.state.admin ? (
                <Component {...props}/>
            ) : (
                <Redirect to={{
                    pathname: '/',
                    state: {from: props.location}
                }}/>
            )
        )}/>
    }
}

export default LoginRoute