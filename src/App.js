import logo from './logo.svg';
import './App.css';
import Gamer from './Gamer';
import Screen from './Screen';
import React from 'react';

export class App extends React.Component {


  render() {
    return (
      <div id="App" className="App">
        <div id="addGamerApp">
        </div>

        <div id="screenApp">
          <Screen />
        </div>

        <div id="gamersApp" style={{display: 'flex',  justifyContent: "space-around", padding: '10px', margin: 'auto' , fontSize:'10px'}}>
          <Gamer name="Yosi"/>
          <Gamer name="Shimon" />
          <Gamer />

        </div>

      </div>
    );
  }
}

export default App;
