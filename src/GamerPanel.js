import React from 'react';
import Gamer from './Gamer';

class GamerPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gamers: [],
      turnIndex: 0
    };
  }
  handleTurnEnd = () => {
    const newTurnIndex = (this.state.turnIndex + 1) % this.props.gamers.length;
    this.setState({ turnIndex: newTurnIndex });
    console.log(this.state.turnIndex)
  }

  handleAddGamer = (name) => {
    const newGamers = [...this.state.gamers, { name }];
    this.setState({ gamers: newGamers });
  }

  render() {
    var currentGamer =  this.props.gamers[this.state.turnIndex]
    if (typeof currentGamer !== "undefined") {
        currentGamer = currentGamer.name;
    } 
    console.log(currentGamer)
    const gamers = this.props.gamers.map((gamer, index) => (
        <li key={index}>
          <Gamer name={gamer.name} 
          isCurrentTurn={index === this.state.turnIndex}
          index={this.state.turnIndex}
          onTurnEnd={this.handleTurnEnd}
          currentGamer = {currentGamer}
          />
        </li>
      ));
    return (
      <div>
        {/* {this.state.gamers.map((gamer, index) => (
          <Gamer key={index} name={gamer} isCurrentTurn={index === this.state.turnIndex}/>
        ))} */}
        {/* <div> */}
        <ul>{gamers}</ul>
              {/* </div> */}
      </div>
    );
  }
}

export default GamerPanel;
