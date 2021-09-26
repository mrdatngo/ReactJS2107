import React, { Component } from 'react'
import PropTypes from 'prop-types'

/**
* @author
* @class ShowTimer
**/

export class ShowTimer extends Component {

    state = {}
    
    constructor() {
        super()
        console.log("ShowTimer constructor")
    }

    static getDerivedStateFromProps(props, state) {
        return {
            newTimer: "Timer: " + props.timer
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (new Date().getTime() % 2 === 0) {
            return false
        } else {
            return true
        }
    }

    componentDidMount() {
        console.log("ShowTimer component did mount");
    }

    componentDidUpdate() {
        console.log("ShowTimer component did update");
    }

    componentWillUnmount() {
        console.log("ShowTimer component wil unmount");
    }

    render() {
        console.log("ShowTimer render");
        return (
            <div>{ this.state.newTimer }</div>
        )
    }
}


ShowTimer.propTypes = {}