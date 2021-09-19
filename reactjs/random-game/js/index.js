
class Game extends React.Component {
    render() {
        return (
            <div>
                <div className="jumbotron text-center">
                    <h3>Guessing random number</h3>
                    <p>I already randomed a number, dare you to guess it!</p>
                </div>
                <div className="main">
                    <button className="btn-primary">New Game</button>
                    <hr />
                    <p>Number of guessed: 0</p>
                    <p>Enter number: </p>
                    <input type="text" />
                    <button className="btn-success">Guess</button>
                    <p className="text-danger">message</p>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<Game />, document.getElementById("app"))