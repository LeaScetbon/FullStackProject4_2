import './App.css';
import React from 'react';

export class Gamer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      number: Math.floor(Math.random() * (99)),
      steps: 0,
      score: [],
      enabled: false,
      exist: true 
    };
  }

  handleTurn = event => {
    this.props.onTurnEnd();
  }

  handleClick = (operation) => {
    switch (operation) {
      case '+1':
        this.setState({ number: Math.floor(this.state.number + 1) }, this.checkScore);
        break;
      case '-1':
        this.setState({ number: Math.floor(this.state.number - 1) }, this.checkScore);
        break;
      case '*2':
        this.setState({ number: Math.floor(this.state.number * 2) }, this.checkScore);
        break;
      case '/2':
        this.setState({ number: Math.floor(this.state.number / 2) }, this.checkScore);
        break;
      default:
        break;
    }
    this.setState({ steps: this.state.steps + 1 });
  }


  checkScore = () => {
    if (this.state.number === 100) {
        const newScore = [...this.state.score, this.state.steps];
        this.setState({ score: newScore });
        this.setState({ steps: 0 });
        this.setState({ number: 100});
        alert (this.state.name + ' won!');
    }
  }

  ButtonNewGame = () => {
    const newScore = [...this.state.score, this.state.steps];
    this.setState({ score: newScore });
    this.setState({ steps: 0 });
    this.setState({ number: Math.floor(Math.random() * (99)) });
  }

  ButtonExit = () => {
    this.setState({exist : false});
  }

  render() {
    const scores = this.state.score.join(', ');
    return (
      <div className="gamerClass">
        <h1>Name: {this.state.name}</h1>
        <br />
        {/* <h1>Number:</h1> */}
        <div id="numId"><br />{this.state.number}</div>
        <br />
        <h1><br />| Steps: {this.state.steps} |      | Score: {scores} |</h1>
        <h1></h1>
        <button class='buttonStyleClass' onClick={() => { this.handleClick('+1'); this.handleTurn() }} id='button+1' disabled={(!this.state.enabled) && (this.state.name !== this.props.currentGamer)}>+1</button>
        <button class='buttonStyleClass' onClick={() => { this.handleClick('-1'); this.handleTurn() }} id='button-1' disabled={(!this.state.enabled) && (this.state.name !== this.props.currentGamer)}>-1</button>
        <button class='buttonStyleClass' onClick={() => { this.handleClick('*2'); this.handleTurn() }} id='button*2' disabled={(!this.state.enabled) && (this.state.name !== this.props.currentGamer)}>*2</button>
        <button class='buttonStyleClass' onClick={() => { this.handleClick('/2'); this.handleTurn() }} id='button/2' disabled={(!this.state.enabled) && (this.state.name !== this.props.currentGamer)}>/2</button>
        <br />
        <h1 style={{ color: "rebeccapurple" }}>{this.props.isCurrentTurn === false ? "disabled" : "enabled"}</h1>
        <div>
          <button onClick={this.ButtonNewGame} disabled={(this.state.number != 100)}>New Game</button>
          <button onClick={this.props.onRemove} disabled={(this.state.number != 100)}>Exit</button>
        </div>
      </div>
    );
  }

}

export default Gamer;