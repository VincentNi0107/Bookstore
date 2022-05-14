import React from 'react';
import '../styles/login.css'
import darklogo from '../assets/dark-logo.png'
import LoginForm from '../components/LoginForm';
import {withRouter} from "react-router-dom";

class LoginView extends React.Component{
    render(){
        return(          
            <div className="signupcontainer">
                <div className="signupCard">
                    <img src={darklogo} className="logo" alt=""/>
                    <div className="inputs">
                        <LoginForm />
                    </div>
                </div>
            </div>
        );
    }
}
export default withRouter(LoginView);