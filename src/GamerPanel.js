import './App.css';
import React from 'react';
import Gamer from './Gamer';


export class GamePanel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
         gamers:[]
        };
      }

  render() {
    return(
        <div> 
        </div>
  
    );

  }

}
export default GamePanel;