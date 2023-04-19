
import './App.css';
import React from 'react';
import Gamer_AddForm from './Gamer_AddForm';
import ReactDOM from "react-dom";

export class Screen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          showForm: false,
          name: '',
        };
        this.handleButtonClick = this.handleButtonClick.bind(this);
    }

    handleButtonClick() {
        this.setState({ showForm: true });
      }

//   handleClick = () => {
//     ReactDOM.render(<Gamer_AddForm />, document.getElementById('addGamerApp'));
//   };

  handleClickStart = () => {

  };

  handleClickName = (event) => {
    // gamers.push(<Gamer name={event.target.value} />);
    // ReactDOM.render(gamers, document.getElementById('gamersApp'));

    this.setState({ name: event.target.value });

};

handleSubmit = (event) => {
    event.preventDefault();
    this.props.onAdd(this.state.name);
    this.setState({ name: '' });
  };

  // handleClickName = (event) => {
  //   ReactDOM.render(<h1>{event.target.value}</h1>, document.getElementById('gamersApp'));

  // };

  render() {
    return (
      <div>
        <button onClick={this.handleClickStart}>Start new Game</button>
        <button onClick={this.handleButtonClick}>Add Gamer</button>
        {this.state.showForm && (
                        <form  onSubmit={this.handleSubmit} >
                            <label>Name:
                                <input type="text"  value={this.state.name}  onChange={this.handleClickName}/>
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
