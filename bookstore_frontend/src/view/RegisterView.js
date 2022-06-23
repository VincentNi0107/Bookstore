import React from 'react';
import '../styles/login.css'
import darklogo from '../assets/dark-logo.png'
import {withRouter} from "react-router-dom";
import RegisterForm from '../components/RegisterForm';

class RegisterView extends React.Component{
    render(){
        return(          
            <div className="signupcontainer">
                <div className="signupCard">
                    <img src={darklogo} className="logo" alt=""/>
                    <div className="inputs">
                        <RegisterForm />
                    </div>
                </div>
            </div>
        );
    }
}
export default withRouter(RegisterView);