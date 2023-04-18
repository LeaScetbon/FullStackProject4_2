import './App.css';
import React from 'react';

import Gamer_AddForm from './Gamer_AddForm';
import ReactDOM from "react-dom";

export class Screen extends React.Component {

  
    handleClick = () => {
    
        ReactDOM.render( <Gamer_AddForm/> , document.getElementById('App'));
      };
  

  render() {
    return(
        <div> 
        <button>Start new Game</button>
        <button onClick={this.handleClick}>Add Gamer</button>
        </div>
  
    );

  }

}
export default Screen;