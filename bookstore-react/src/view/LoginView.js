import React from 'react';
import '../styles/login.css'
import darklogo from '../assets/dark-logo.png'

export class LoginView extends React.Component{
    render(){
        return(          
            <div className="signupcontainer">
            <div className="signupCard">
                <img src={darklogo} className="logo" alt=""/>
                <div className="inputs">
                    <input type="email" autoComplete="off" id="email" placeholder="email"/>
                    <input type="password" autoComplete="off" id="password" placeholder="password"/>
                    <button className="submitbtn">log in</button>
                </div>
                <a href="/signup" className="loginlink">Don't have an account? Create one</a>
            </div>
            </div>
        );
    }
}