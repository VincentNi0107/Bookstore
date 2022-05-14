import React from 'react';
import '../styles/login.css'
import darklogo from '../assets/dark-logo.png'
import {withRouter} from "react-router-dom";

class SignupView extends React.Component{
    render(){
        return(          
            <div className="signupcontainer">
            <div className="signupCard">
                <img src={darklogo} className="logo" alt=""/>
                <div className="inputs">
                    <input type="text" autoComplete="off" id="name" placeholder="name"/>
                    <input type="email" autoComplete="off" id="email" placeholder="email"/>
                    <input type="password" autoComplete="off" id="password" placeholder="password"/>
                    <input type="text" autoComplete="off" id="number" placeholder="number"/>
                    <input type="checkbox" defaultChecked className="checkbox" id="terms-and-cond"/>
                    <label>{' '}agree to our <a href="">terms and conditions</a></label>
                    <button className="submitbtn">create account</button>
                </div>
                <a href="/login" className="loginlink">already have an account? Log in here</a>
            </div>
            </div>
        );
    }
}
export default withRouter(SignupView);