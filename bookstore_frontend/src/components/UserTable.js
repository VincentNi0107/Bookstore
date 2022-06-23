import React from 'react';
import { Button , message , Table } from 'antd';
import { getUsers , ban , unban } from '../services/userService';

class UserTable extends React.Component {
    addFormRef = React.createRef();
    constructor(props) {
        super(props);
        this.state = {
            dataSource: [],
        };
    }

    componentDidMount() {

        const callback = (data) => {
            this.setState({dataSource: data});
        };

        let user = JSON.parse(localStorage.getItem('user'));
        if (user === null) {
            message.error("请登录");
        } else if (user.userType !== 'admin') {
            message.error("你没有权限");
        } else {
            getUsers(callback);
        }
    }

    handleBan = (record) => {
        const callback =  (data) => {
            if(data.status==0){
                message.success(data.msg);
            }
            else{
                message.error(data.msg);
            }
        };
        if(record.userType==="customer"){
            ban(record.userId, callback);
        }
        if(record.userType==="ban"){
            unban(record.userId, callback);
        }
        const getUserCallback = (data) => {
            this.setState({dataSource: data});
        };
        setTimeout(() => getUsers(getUserCallback), 100);
    };

    render() {
        const columns = [
            {
                title: 'UserId',
                dataIndex: 'userId',
                key: 'userId',
            },
            {
                title: 'Email',
                dataIndex: 'email',
                key: 'email',
            },
            {
                title: 'Username',
                dataIndex: 'username',
                key: 'username',
            },
            {
                title: 'Password',
                dataIndex: 'password',
                key: 'password',
            },
            {
                title: 'UserType',
                dataIndex: 'userType',
                key: 'usertype',
            },
            {
                title: 'operation',
                dataIndex: 'operation',
                render: (_, record) => {
                    let text=(<Button disabled>admin</Button>);
                    if(record.userType==='ban'){
                        text=(<Button onClick={() => this.handleBan(record)}>UnBan</Button>);
                    }
                    if(record.userType==='customer'){
                        text=(<Button type="primary" danger onClick={() => this.handleBan(record)}>Ban</Button>);
                    }
                    return(<a>{text}</a>);
                },
            },
        ];
        return (
            <div>
                <Table
                    bordered
                    dataSource={this.state.dataSource}
                    columns={columns}
                />
            </div>
        );
    }
}

export default UserTable;
