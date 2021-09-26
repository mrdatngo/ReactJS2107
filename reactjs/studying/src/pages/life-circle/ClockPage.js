import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { ShowTimer } from './ShowTimer';

/**
* @author
* @class ClockPage
**/

export class ClockPage extends Component {

    constructor() {
        super()
        this.state = {
            timer: "--:--"
        }
        console.log("ClockPage: Constructor");
    }

    // called only one-time
    componentDidMount() {
        console.log("ClockPage did mount!");
        this.start()
        document.title = this.state.timer
    }

    componentDidUpdate() {
        console.log("ClockPage did Update");
        document.title = this.state.timer
    }

    start = () => {
        this.timerInteral = setInterval(() => {
            console.log("Start set timer")
            this.setState({ timer: new Date().toLocaleTimeString() })
        }, 1000)
    }

    componentWillUnmount() {
        console.log("ClockPage - will unmount")
        clearInterval(this.timerInteral)
    }

    render() {
        console.log("Clock Page - render")
        return (
            <div>
                <h3>Clock Page</h3>
                <ShowTimer timer={this.state.timer} />
            </div>
        )
    }
}


ClockPage.propTypes = {}