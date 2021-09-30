import { createStore } from 'redux'


function counterReducer(state, action) {
    console.log(state, action)
    switch(action.type) {
        case "INCREASE_COUNTER":
            return {
                ...state,
                counter: state.counter + action.payload
            }
    }
    return state
}

let store = createStore(counterReducer, { counter: 0 })

export default store;

// actions
export const increaseCounter = () => {
    store.dispatch({
        type: "INCREASE_COUNTER",
        payload: 1
    })
}

export const increaseCounterAsync = () => {
    setTimeout(() => {
        store.dispatch({
            type: "INCREASE_COUNTER",
            payload: 1
        })
    }, 1000)
}