import React from 'react'
import { Form, Input, Button, Checkbox, Card } from 'antd';

import "./login.css"

/**
* @author
* @function LoginPage
**/

export const LoginPage = (props) => {
    const onFinish = (values) => {
        console.log('Success:', values);
        // submit login
        // redirect home
        window.location.href = "/"
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
        // validate failed
    };

    return (
        <Card className="login-container" size="small" title="Login" extra={<a href="#">Register</a>} style={{ width: 500 }}>
            <Form
                name="basic"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 16,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your username!',
                        },
                        // {
                        //     type: 'email',
                        //     message: 'The input is not valid E-mail!',
                        // }
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                        {
                            validator: (_, value) => {
                                console.log(value);
                                let check = false
                                let message = ""
                                if (value && value.length > 3) {
                                    check = true
                                } else {
                                    message = "Password must have more than 3 characters!"
                                }
                                return check ? Promise.resolve() : Promise.reject(message)
                            }
                        }
                    ]}
                >
                    <Input.Password />
                </Form.Item>
                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </Card>
    );
}
