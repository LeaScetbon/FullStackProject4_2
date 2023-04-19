
import './App.css';
import './buttonStyle.css'
import React from 'react';
import Gamer_AddForm from './Gamer_AddForm';
import ReactDOM from "react-dom";

export class Screen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showForm: false,
      name: '',
      inGame: true
    };
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleButtonClick() {
    this.setState({ showForm: true });
  }

  handleClickStart = () => {
    this.setState({ showForm: false });
    this.setState({ inGame: false });
  };

  handleClickName = (event) => {
    this.setState({ name: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onAdd(this.state.name);
    this.setState({ name: '' });
  };

  render() {
    return (
      <div className='buttonStyleClass'>
        <button onClick={this.handleClickStart} disabled={(!this.state.inGame)}>Start new Game</button>
        <button onClick={this.handleButtonClick} disabled={(!this.state.inGame)}>Add Gamer</button>
        {this.state.showForm && (
          <form onSubmit={this.handleSubmit} >
            <label>Name:
              <input type="text" value={this.state.name} onChange={this.handleClickName} />
            </label>
            <button type="submit">Add</button>
          </form>
        )}
        {/* <label>Name:
          <input type="text" id="fname" name="firstname" placeholder="Your name.." />
        </label>
        <button onClick={this.handleClickName}>Add</button> */}
      </div>

    );

  }

}
export default Screen;
