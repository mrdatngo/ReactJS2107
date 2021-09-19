
class Header extends React.Component {
    render() {
        return (
            <div className={"jumbotron text-center" + (this.props.numberOfGuessed > 7 ? " bg-red" : "")}>
                <h3>Guessing random number</h3>
                <p>I already randomed a number (1-100), dare you to guess it!</p>
            </div>
        )
    }
}

class Game extends React.Component {

    constructor() {
        super()
        this.state = this.defaultState()
    }

    defaultState = () => {
        return {
            guessingNumber: 0,
            messageInfo: "",
            randomedNumber: this.randomNumber(1, 100)
        }
    }

    randomNumber(from, to) {
        return from + Math.floor(Math.random() * (to - from + 1))
    }

    inputChange = (event) => {
        console.log(event.target.value)
        this.setState({ guessingNumber: Number(event.target.value) })
    }

    guess = () => {
        let message = ""
        let { guessingNumber, randomedNumber } = this.state
        // never do it
        // this.props.numberOfGuessed = this.props.numberOfGuessed + 1
        // if (guessingNumber == 0) {
        //     this.setState({ messageInfo: "Please input number value bigger than 0!" })
        //     return
        // }
        if (guessingNumber > randomedNumber) {
            message = "You guessed bigger!"
        } else if (guessingNumber < randomedNumber) {
            message = "You guessed smaller!"
        } else {
            message = "Congratulation!"
        }
        this.setState({ messageInfo: message, guessingNumber: 0 })
        this.props.increaseNumberOfGuessed()
    }

    newGame = () => {
        this.setState(this.defaultState())
    }

    render() {
        return (
            <div className="main">
                <button className="btn-primary" onClick={this.newGame}>New Game</button>
                <hr />
                <p>Number of guessed: {this.props.numberOfGuessed}</p>
                <p>Enter number: </p>
                <input type="number" onChange={this.inputChange} min="3" value={this.state.guessingNumber} />
                <button className="btn-success" onClick={this.guess}>Guess</button>
                <p className="text-info">{this.state.messageInfo}</p>
            </div>
        )
    }
}

class App extends React.Component {

    constructor() {
        super()
        this.state = {
            numberOfGuessed: 0
        }
    }

    increaseNumberOfGuessed = () => {
        this.setState({ numberOfGuessed: this.state.numberOfGuessed + 1 })
    }

    render() {
        return (
            <div>
                <Header numberOfGuessed={this.state.numberOfGuessed} />
                <Game numberOfGuessed={this.state.numberOfGuessed} increaseNumberOfGuessed={this.increaseNumberOfGuessed} />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById("app"))