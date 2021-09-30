import React, { useEffect, useState } from 'react'

import store from './store'

/**
* @author
* @function ShowCounter
**/

export const ShowCounter = () => {
    const [counter, setCounter] = useState(0)

    useEffect(() => {
        // component did mount
        let state = store.getState()
        setCounter(state.counter)

        store.subscribe((state) => {
            console.log(state);
            setCounter(state.counter)
        })
    }, [])

    return (
        <div>ShowCounter: {counter}</div>
    )
}
