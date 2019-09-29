import React, {Component} from 'react';
import {Form, Icon, Input, Button, Checkbox} from 'antd';
import memoryUtils from '../../utils/memoryUtils';
import "antd/dist/antd.css";
import './login.css'
import logo from './images/logo.jpg'

const Item = Form.Item;

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: ""
        }
    }

    handleSubmit = e => {
        e.preventDefault();
        alert("发送ajax请求");
        const form = this.props.form;
        const values = form.getFieldsValue();
        const username = form.getFieldsValue("username");
        const Password = form.getFieldsValue("Password");
        var data;
        const response = await rqlogin(data)
        if (response.status == 0) {
            const user = response.data;
            memoryUtils.user=user;
            //保存user

        } else {
            this.props.history.replace('/');
        }
        console.log(values, username, Password);
    }

    render() {
        return <div className="login2">
            <header className="login-header">
                <img src={logo} alt='login'/>
                <h1>React 后台管理系统</h1>
            </header>
            <section className="login-content">
                <h2>用户登录</h2>
                <Form onSubmit={this.handleSubmit} className="login-form">
                    <Item>
                        <Input
                            prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>}
                            placeholder="Username"
                        />
                    </Item>

                    <Form.Item>
                        <Input
                            prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>}
                            type="password"
                            placeholder="Password"
                        />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            Log in
                        </Button>
                    </Form.Item>
                </Form>
            </section>
        </div>
    }
}

export const WrapperLogin = Form.create()(Login)
