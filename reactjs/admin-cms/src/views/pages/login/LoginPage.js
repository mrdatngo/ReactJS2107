import React, { useEffect, useState } from 'react'
import { Form, Input, Button, Checkbox, Card, Typography } from 'antd';

import "./login.css"

import store from '../../../redux/store'
import { useHistory } from 'react-router';

const { Text } = Typography;

/**
* @author
* @function LoginPage
**/

export const LoginPage = (props) => {

    let [isSubmitting, setIsSubmitting] = useState(false)
    let [message, setMessage] = useState("")
    let history = useHistory()

    useEffect(() => {
        store.subscribe(() => {
            let state = store.getState()
            console.log(state)
            setIsSubmitting(state.auth.submitting)
            if (state.auth.isLoggedIn) {
                history.push("/dashboard")
            }
            setMessage(state.auth.message)
        })
    }, [])

    const onFinish = (values) => {
        console.log('Success:', values);
        // submit login
        store.dispatch({ type: "USER_LOGIN", payload: values })
        // redirect home
        // window.location.href = "/"
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
                    <div>
                        <Text type="danger">{message}</Text>
                    </div>
                    <Button type="primary" htmlType="submit" loading={isSubmitting}>
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </Card>
    );
}
