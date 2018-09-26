import React, { Component } from 'react';
import { Form, Input, Icon, Checkbox, Button } from 'antd';
import style from './LoginForm.less';

const FormItem = Form.Item;

export default class LoginForm extends Component {
    render() {
        return (
            <div>
                <Form className={ style.loginForm }>
                    <FormItem>
                        <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                    </FormItem>
                    <FormItem>
                        <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Password" />
                    </FormItem>
                    <FormItem>
                        <Checkbox>记住我</Checkbox>
                        <a className={ style.loginFormForgot } href="">忘记密码？</a>
                        <Button type="primary" htmlType="submit" className={ style.loginFormButton }>
                            登录
                        </Button>
                        Or <a href="">去注册</a>
                    </FormItem>
                </Form>
            </div>
        )
    }
}
