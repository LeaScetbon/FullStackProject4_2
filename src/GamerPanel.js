import React from 'react';
import Gamer from './Gamer';

class GamerPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gamers: [],
    };
  }

  render() {
    const gamers = this.props.gamers.map((gamer, index) => (
        <li key={index}>
          <Gamer name={gamer.name} />
        </li>
      ));
    return (
      <div>
        {this.state.gamers.map((gamer, index) => (
          <Gamer key={index} name={gamer} />
        ))}
        <div>
        <ul>{gamers}</ul>
      </div>
      </div>
    );
  }
}

export default GamerPanel;
