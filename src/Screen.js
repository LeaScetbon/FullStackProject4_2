
import './App.css';
import './buttonStyle.css'
import React from 'react';
import Gamer_AddForm from './Gamer_AddForm';
import ReactDOM from "react-dom";

export class Screen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showForm: true,
      name: '',
      inGame: true
    };
    //this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  // handleButtonClick() {
  //   this.setState({ showForm: true });
  // }

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
    // this.setState({ showForm: true });
  };

  render() {
    return (
      <div className='Screen'>
        <h2>Get To 100!</h2>
        {/* <button className='buttonStyleClass' onClick={this.handleButtonClick} disabled={(!this.state.inGame)}>Add Gamer</button> */}

        {this.state.showForm && (
          <div style={{ display: "flex", justifyContent: "space-around", padding: '20px', margin: 'auto' }}>
            <form className='formStyleClass' onSubmit={this.handleSubmit} style={{ display: "flex", justifyContent: "space-around", padding: '20px', margin: 'auto' }} >
              <label style={{padding: '20px'}}>Name: &nbsp;
                <input type="text" value={this.state.name} onChange={this.handleClickName} />
              </label>
              <button type="submit" className='buttonStyleHeader' disabled={(!this.state.inGame)}>Add Gamer</button>
            </form>
            <button className='buttonStyleHeader' onClick={this.handleClickStart} disabled={(!this.state.inGame)}>Start new Game</button>
          </div>
        )
        }
      </div>
    );
  }
}
export default Screen;
