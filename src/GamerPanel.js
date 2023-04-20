import React from 'react';
import Gamer from './Gamer';

class GamerPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gamers: [],
      turnIndex: 0,
      three_bests : []
    };
  }
 
  
 


  handleTurnEnd = () => {
    const newTurnIndex = (this.state.turnIndex + 1) % this.props.gamers.length;
    this.setState({ turnIndex: newTurnIndex });
    console.log(this.state.turnIndex)
  }

  handleAddGamer = (name) => {
    const newGamer = <Gamer key={name} name={name} onRemove={() => this.removeGamer(name)} />;
    this.setState({ gamers: [...this.state.gamers, newGamer] });
  }

  handleDeleteGamer = (name) => {
    this.setState(prevState => ({
        gamers: prevState.gamers.filter(gamer => gamer.key !== name)
      }));
  }

  
    

  render() {
    var currentGamer = this.props.gamers[this.state.turnIndex];
    if (typeof currentGamer !== "undefined") {
      currentGamer = currentGamer.name;
    }
    console.log(currentGamer);

    
  

    const gamers = this.props.gamers.map((gamer, index) => (
      <li key={index}>
        <Gamer name={gamer.name}
          isCurrentTurn={index === this.state.turnIndex}
          index={this.state.turnIndex}
          onTurnEnd={this.handleTurnEnd}
          currentGamer={currentGamer}
          onRemove= {() => this.handleDeleteGamer(gamer.name)}
        />
      </li>
    ));
   

   
    

    return (
      <div>
        <ul style={{listStyleType:"none", display: "flex", justifyContent: "space-around", padding: '20px', margin: 'auto' }}>{gamers}</ul>
      
    </div>
     
    );
  }
  
}

export default GamerPanel;
