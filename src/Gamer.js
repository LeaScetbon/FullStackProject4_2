import './App.css';
import React from 'react';

export class Gamer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name : '',
      number : Math.floor(Math.random() * (99)),
      steps : 0,
      score : [],
      enabled : false
    };
  }

  handleClick = (operation) => {
    switch(operation) {
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
        this.setState({ number:Math.floor( this.state.number / 2) });
        break;
      default:
        break;
    }
  }

  render() {
    return(
        <div> 
        <h1>Name: {this.state.name} {this.state.enabled}</h1>
        <h1>Number: {this.state.number}</h1>
        <h1>Steps: {this.state.steps}</h1>
        <h1>Score: {this.state.score}</h1>
        <button onClick={() => this.handleClick('+1')} id='button+1'>+1</button>
        <button onClick={() => this.handleClick('-1')} id='button-1'>-1</button>
        <button onClick={() => this.handleClick('*2')} id='button*2'>*2</button>
        <button onClick={() => this.handleClick('/2')} id='button/2'>/2</button>
        </div>
  
    );

  }

}
export default Gamer;