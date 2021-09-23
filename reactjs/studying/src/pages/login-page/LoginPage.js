import React, { Component } from 'react'
import "./style.css"
import classNames from 'classnames'

/**
* @author
* @class LoginPage
**/

class LoginPage extends Component {

    state = {
        data: {
            username: "",
            password: ""
        },
        errors: {},
        submiting: false,
    }

    submit = (event) => {
        // verify
        let { data } = this.state
        let errors = {}
        if (!data.username) {
            errors.username = "Please input username!"
        } else {
            if (data.username.length < 3) {
                errors.username = "Username must more than 3 charactors"
            }
        }

        if (!data.password) {
            errors.password = "Please input password!"
        }

        console.log("errors: ", errors)
        this.setState({ errors })

        if (Object.keys(errors).length === 0) {
            //call api login and redirect to Dashboard

            // redirect dashboard
            window.location.href = "/dashboard"
        }

        // submit data to server
        console.log("submit ", this.state.data, " to server")
        event.preventDefault()
    }

    onInputChange = (event) => {
        this.setState({
            data: {
                ...this.state.data,
                [event.target.name]: event.target.value
            }
        })
    }

    render() {
        return (
            <form className="login-container">
                <h3 className="title">Login</h3>
                <div className="field-wrapper">
                    <div className="flex-container">
                        <label className="field-label" htmlFor="">User name</label>
                        <input className={classNames("field-input", { "error": this.state.errors.username })} name="username" type="text" onChange={this.onInputChange}/>
                    </div>
                    {
                        this.state.errors.username && <span className="error-message">{this.state.errors.username}</span>
                    }
                </div>
                <div className="field-wrapper">
                    <div className="flex-container">
                        <label className="field-label" htmlFor="">Password</label>
                        <input className={classNames("field-input", { "error": this.state.errors.password })} name="password" type="password" onChange={this.onInputChange} />
                    </div>
                    { this.state.errors.password && <span className="error-message">{this.state.errors.password}</span> }
                    
                </div>
                <br />
                <div className="submit-wrapper">
                    <input type="submit" className="btn-submit" onClick={this.submit} value="Login" />
                </div>
            </form>
        )
    }
}


export default LoginPage