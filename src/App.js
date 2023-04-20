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
      three_bests : []

    };
  }

  handleAddGamer = (name) => {
    const newGamer = { name: name };
    this.setState((prevState) => ({
      gamers: [...prevState.gamers, newGamer],
    }));
  };

  Three_best_players(new_list){
    var list_records = []
    var list_players = []
    if(new_list!= null){
      list_players = new_list;
    }
    else {
      list_players = [...this.state.gamers];
    }
  
    let max_len = 0;
    let index = 0;
    let n = 0;
  
    if(list_players.length==0){
      n=0
    }
    else {
      if(list_players.length==1){
          n=1
      }
      else{
          if(list_players.length==2){
              n=2
          }
          else{
            n=3  
          }
      }
    }
    let average;
    for(let j=0; j<n; j++){
      if (list_players[j].score.length!=0){
          var sum = list_players[j].score.reduce((a,b) => a + b);
          var l = list_players[j].score.length
          console.log(sum + " " + 1)
          average = list_players[j].score.reduce((a,b)=> a + b)/ list_players[j].score.length;
          break;
          
      }
  
    }
    for(let i=0; i<n; i++){
      for (let ii =0; ii<n; ii++){
          if (list_players[ii].score.length > max_len){
              max_len=list_players[i].score.length;
              index = ii;
          }
          if(list_players[ii].score.length == max_len && list_players[ii].score.length!=0)
          {
              if(list_players[ii].score.length.reduce((a,b) => a + b)/ list_players[ii].score.length<average){
              index = ii;
              average = list_players[i].score.reduce((a,b) => a + b) / list_players[i].score.length;
  
          }
      
      }
         
      }
      max_len=0
      list_records.push(list_players[index])
      list_players.splice(index,1)
      index = 0;
    }
   this.setState({three_bests : list_records})
    };

  render() {
    const bests = this.state.three_bests.map((best, index) => (
      <li key={index}>
        <p>{best.name}</p>
      </li>
    ))
    return (
        <div id="App" className="App">
        <Screen onAdd={this.handleAddGamer}/>
        <GamerPanel gamers={this.state.gamers} onChange={this.Three_best_players}   />
        <ul >{bests}</ul>
      </div>
    );
  }
}

export default App;
