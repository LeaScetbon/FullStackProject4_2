import logo from './logo.svg';
import './App.css';
import React from 'react';
import GamerPanel from './GamerPanel';
import Gamer_AddForm from './Gamer_AddForm';
import Screen from './Screen';

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gamers: [],
    };
  }

  handleAddGamer = (name) => {
    const newGamer = { name: name };
    this.setState((prevState) => ({
      gamers: [...prevState.gamers, newGamer],
    }));
  };

  render() {
    return (
      // <div id="App" className="App">
      //   <div id="addGamerApp">
      //   </div>

      //   <div id="screenApp">
      //     <Screen />
      //   </div>

      //   <div id="gamersApp" style={{display: 'flex',  justifyContent: "space-around", padding: '10px', margin: 'auto' , fontSize:'10px'}}>
      //     <Gamer name="Yosi"/>
      //     <Gamer name="Shimon" />
      //     <Gamer />

      //   </div>

      // </div>

      
        <div id="App" className="App">
        <Screen onAdd={this.handleAddGamer}/>
        <GamerPanel gamers={this.state.gamers} />
      </div>
    );
  }
}

export default App;
