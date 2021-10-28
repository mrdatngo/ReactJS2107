import React, { useEffect } from 'react'
import { Form, Input, Button, Card, Typography } from 'antd';
import { useHistory } from 'react-router';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import "./login.css"
import { LoginAction } from "../../../redux/actions/auth"
import { setAxiosToken } from '../../../apis';

const { Text } = Typography;

/**
* @author
* @function LoginPage
**/

const LoginPage = ({ isSubmitting, message, isLoggedIn, login }) => {
    let history = useHistory()

    useEffect(() => {
        if (isLoggedIn) {
            setAxiosToken()
            history.push("/")
        }
    }, [isLoggedIn, history])

    const onFinish = (values) => {
        console.log('Success:', values);
        // submit login
        login(values)
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
        // validate failed
    };

    return (
        <Card className="login-container bg-primary" size="small" title="Login" extra={<a href="#">Register</a>} style={{ width: 500 }}>
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

LoginPage.propTypes = {
    isSubmitting: PropTypes.bool,
    message: PropTypes.string,
    isLoggedIn: PropTypes.bool,
    login: PropTypes.func.isRequired,
    // test: PropTypes.shape({
    //     propx: PropTypes.string.isRequired
    // }).isRequired,
    // test2: PropTypes.string.isRequired
}

function mapStateToProps(state) {
    return {
        isSubmitting: state.auth.submitting,
        message: state.auth.message,
        isLoggedIn: state.auth.isLoggedIn
    }
}

function mapDispatchToProps(dispatch) {
    return {
        login: (data) => { dispatch(LoginAction(data))  }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)