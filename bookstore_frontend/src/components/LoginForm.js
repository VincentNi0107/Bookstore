import React from 'react';
import {Button, Form, Input} from 'antd';
import {Link} from "react-router-dom";
import * as userService from '../services/userService';
class LoginForm extends React.Component {

    onFinish = values => {
        console.log('Received values of form: ', values);
        userService.login(values);
    };

    render() {
        return (
            <Form className="login-form"
                  initialValues={{remember: true}}
                  onFinish={this.onFinish}>
                <Form.Item
                    name="username"
                    rules={[{required: true, message: 'Please input your username!'}]}
                >
                    <Input    
                        placeholder="Username"
                        autoComplete="off"
                        id="name"
                    />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[{required: true, message: 'Please input your Password!'}]}
                >
                    <Input
                        type="password"
                        placeholder="Password"
                        autoComplete="off"
                        id="password"
                    />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" className="submitbtn">
                        Log in
                    </Button>
                    <Link to={"/register"} className="loginlink">Don't have an account? Create one</Link>
                </Form.Item>
            </Form>
        );
    }
}

export default LoginForm