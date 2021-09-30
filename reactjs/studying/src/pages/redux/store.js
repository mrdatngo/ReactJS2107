class Store {
    
    constructor(state) {
        this.state = state;
    }

    getState = () => {
        return this.state
    }

    dispatch = () => {

    }

    increaseCounter = () => {
        this.state = {
            ...this.state,
            counter: this.state.counter + 1
        }
        this.cbs.forEach(cb => {
            cb(this.state)
        });
    }

    increaseCounterAsync = () => {
        setTimeout(() => {
            this.state = {
                ...this.state,
                counter: this.state.counter + 1
            }
            this.cbs.forEach(cb => {
                cb(this.state)
            });
        }, 1000)
    }

    cbs = []

    subscribe = (cb) => {
        this.cbs.push(cb)
    }
}


let store = new Store({ counter: 0 })

export default store;