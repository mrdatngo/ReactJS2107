// let app = document.getElementById("newfeeds")
// let h3Elem = document.createElement("h3")
// let pElem = document.createElement("p")
// h3Elem.innerText = "New feeds"
// pElem.innerText = "This is new feeds"
// app.appendChild(h3Elem)
// app.appendChild(pElem)
// console.log(app)

// let app = React.createElement("h3", null, "New feeds")

// let app = <h3>New feeds</h3>
// let app = React.createElement("div", null, React.createElement("h3", null, "New Feeds"), React.createElement("p", null, "This is descriptions"));

let app = (<div>
    <h3>New feeds</h3>
    <p>This is description</p>
</div>)
ReactDOM.render(app, document.getElementById("newfeeds"))

// clock
// setInterval(() => {
//     let timer = new Date().toLocaleTimeString() 
//     let clock = <div>
//         <label>Timer:</label>
//         <p> {timer} </p>
//     </div>
//     ReactDOM.render(clock, document.getElementById("clock"))
// }, 1000)

let timer = new Date().toLocaleTimeString()
let clock = <div>
    <label>Timer:</label>
    <p> {timer} </p>
</div>


class Clock extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            timer: "--:--",
            status: props.status // start/stop
        }
        if (props.status === "start") {
            this.run()
        }
        console.log(props);
        // this.run()
        // this.btnClick = this.btnClick.bind(this)
    }

    run = () => {
        this.clockInterval = setInterval(() => {
            // do not do this
            // this.state.timer = new Date().toLocaleTimeString()
            this.setState({
                timer: new Date().toLocaleTimeString()
            })
        }, 1000)
    }

    start = () => {
        this.run()
    }

    stop = () => {
        clearInterval(this.clockInterval)
    }

    btnClick = () => {
        if (this.state.status === "stop") {
            this.setState({ status: "start" })
            this.start()
        } else {
            this.setState({ status: "stop" })
            this.stop()
        }
    }

    render() {
        return (
            <div>
                <label>Timer:</label>
                {/* <p> {this.state.timer} </p> */}
                <ShowTimer timer={this.state.timer} />
                <button onClick={this.btnClick}>{this.state.status === "stop" ? "Start" : "Stop"}</button>
            </div>
        )
    }
}

class ShowTimer extends React.Component {
    constructor() {
        // never do it
        // this.props.timer = "test"
    }
    render() {
        return (
            <p> {this.props.timer} </p>
        )
    }
}

ReactDOM.render(<Clock status="start"/>, document.getElementById("clock"))