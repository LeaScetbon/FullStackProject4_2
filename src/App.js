import logo from './logo.svg';
import './App.css';
import Gamer from './Gamer';
import Screen from './Screen';
import React from 'react';

export class App extends React.Component {


  render() {
  return (
    <div id="App" className="App">
    <Screen/>
    <Gamer/>
  
    </div>
  );
}
}

export default App;
