import React from 'react';
import {Button, Form, Input} from 'antd';
import {Link} from "react-router-dom";
import * as userService from '../services/userService';

class LoginForm extends React.Component {

    onFinish = values => {
        console.log('Received values of form: ', values);
        userService.register(values);
    };

    render() {
        return (
            <Form className="login-form"
                  initialValues={{remember: true}}
                  onFinish={this.onFinish}>
                <Form.Item
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your username!',
                        },
                        {
                            validator: (_, value, callback) => {
                                const checkUsernameCallback = (response) => {
                                    if (response.status >=0) {
                                        callback();
                                    }
                                    else {
                                        callback("The username has been used!");
                                    }
                                };
                                console.log(value);
                                userService.checkDup(value, checkUsernameCallback);
                            },
                        },
                    ]}
                >
                    <Input    
                        placeholder="Username"
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
                <Form.Item
                    name="confirm"
                    dependencies={['password']}
                    rules={[
                        {
                            required: true,
                            message: 'Please confirm your password!',
                        },
                        ({ getFieldValue }) => ({
                            validator(rule, value) {
                                if (!value || getFieldValue('password') === value) {
                                    return Promise.resolve();
                                }
                                return Promise.reject('The two passwords that you entered do not match!');
                            },
                        }),
                    ]}
                >
                    <Input
                        type="password"
                        placeholder="Password again"
                        autoComplete="off"
                        id="confirm"
                    />
                </Form.Item>
                <Form.Item
                    className="register-form-button"
                    name="email"
                    rules={[
                        {
                            type: 'email',
                            message: 'The input is not valid E-mail!',
                        },
                        {
                            required: true,
                            message: 'Please input your E-mail!',
                        },
                    ]}
                >
                    <Input
                        type="email"
                        placeholder="email"
                    />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" className="submitbtn">
                        Register
                    </Button>
                    <Link to={"/login"} className="loginlink">already have an account? Log in here</Link>
                </Form.Item>
            </Form>
        );
    }
}

export default LoginForm