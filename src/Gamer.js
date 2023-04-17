import './App.css';
import React from 'react';


export class Gamer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name : '',
      number : Math.floor(Math.random() * (99)),
      steps : 0,
      score : []
    };
  }

  

  render() {
    return(
        <div> 
        <h1>Name: {this.state.name}</h1>
        <h1>Number: {this.state.number}</h1>
        <h1>Steps: {this.state.steps}</h1>
        <h1>Score: {this.state.score}</h1>
        <button id='button+1'>+1</button>
        <button id='button-1'>-1</button>
        <button id='button*2'>*2</button>
        <button id='button/2'>/2</button>
        </div>
  
    );

  }

}
export default Gamer;