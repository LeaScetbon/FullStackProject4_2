import './App.css';
import React from 'react';
import Gamer_AddForm from './Gamer_AddForm';
import ReactDOM from "react-dom";

export class Screen extends React.Component {

  handleClick = () => {
    ReactDOM.render(<Gamer_AddForm />, document.getElementById('addGamerApp'));
  };

  handleClickStart = () => {

  };

  // handleClickName = (event) => {
  //   ReactDOM.render(<h1>{event.target.value}</h1>, document.getElementById('gamersApp'));

  // };

  render() {
    return (
      <div>
        <button onClick={this.handleClickStart}>Start new Game</button>
        <button onClick={this.handleClick}>Add Gamer</button>
        {/* <label>Name:
          <input type="text" id="fname" name="firstname" placeholder="Your name.." />
        </label>
        <button onClick={this.handleClickName}>Add</button> */}
      </div>

    );

  }

}
export default Screen;