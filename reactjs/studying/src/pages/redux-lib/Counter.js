import React, { useEffect, useState } from 'react'

import store, { increaseCounter, increaseCounterAsync } from './store'

/**
* @author
* @function Counter
**/

const Counter = (props) => {

    const [counter, setCounter] = useState(0)

    useEffect(() => {
        setCounter(store.getState().counter)
        store.subscribe(() => {
            setCounter(store.getState().counter)
        })
    }, [])

    let increase = () => {
        increaseCounter()
    }

    let increaseAsync = () => {
        increaseCounterAsync()
    }

    return (
        <div>
            <h3>Counter: { counter }</h3>
            <button onClick={increase}>Increase</button>
            <button onClick={increaseAsync}>Increate after 1s</button>
        </div>
    )
}

export default Counter;