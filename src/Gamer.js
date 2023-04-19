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
      enabled: false
    };
  }

  handleTurn = event  => {
    this.props.onTurnEnd();
   
  }


  handleClick = (operation) => {
    switch (operation) {
      case '+1':
        this.setState({ number: Math.floor(this.state.number + 1) });
        break;
      case '-1':
        this.setState({ number: Math.floor(this.state.number - 1) });
        break;
      case '*2':
        this.setState({ number: Math.floor(this.state.number * 2) });
        break;
      case '/2':
        this.setState({ number: Math.floor(this.state.number / 2) });
        break;
      default:
        break;
    }
    this.setState({ steps : this.state.steps + 1 });
    if (this.state.number >= 100) {
        const newScore = [...this.state.score, this.state.steps];
        this.setState({ score: newScore });
        this.setState({ number: Math.floor(Math.random() * (99)) });
        alert (this.state.name + ' won!')

      }
  }

  render() {
    const scores = this.state.score.join(', ');
    return (
        
      <div>
        {/* <h1>Name: {this.state.name} - {this.state.enabled}</h1> */}
        <h1>Name: {this.state.name} - {this.props.isCurrentTurn===false? "disabled": "enabled"}</h1>
        <h1>Number: {this.state.number}</h1>
        <h1>Steps: {this.state.steps}</h1>
        <h1>Score: {scores}</h1>
        {console.log(this.props.name)}
        {console.log(this.state.name)}
        <button  onClick={() => {this.handleClick('+1'); this.handleTurn()}} id='button+1' disabled={(!this.state.enabled) && (this.state.name !== this.props.currentGamer)}>+1</button> 
        <button onClick={() => {this.handleClick('-1'); this.handleTurn()}} id='button-1' disabled={(!this.state.enabled) && (this.state.name !== this.props.currentGamer)}>-1</button>
        <button onClick={() => {this.handleClick('*2'); this.handleTurn()}} id='button*2' disabled={(!this.state.enabled) && (this.state.name !== this.props.currentGamer)}>*2</button>
        <button onClick={() => {this.handleClick('/2'); this.handleTurn()}} id='button/2' disabled={(!this.state.enabled) && (this.state.name !== this.props.currentGamer)}>/2</button>
      </div>
    );
  }

}

export default Gamer;