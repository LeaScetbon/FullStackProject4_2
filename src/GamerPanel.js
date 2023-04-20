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
 
//   Three_best_players(new_list){
//   var list_records = []
//   var list_players = []
//   if(new_list!= null){
//     list_players = new_list;
//   }
//   else {
//     list_players = [...this.state.gamers];
//   }

//   let max_len = 0;
//   let index = 0;
//   let n = 0;

//   if(list_players.length==0){
//     n=0
//   }
//   else {
//     if(list_players.length==1){
//         n=1
//     }
//     else{
//         if(list_players.length==2){
//             n=2
//         }
//         else{
//           n=3  
//         }
//     }
//   }
//   let average;
//   for(let j=0; j<n; j++){
//     if (list_players[j].score.length!=0){
//         var sum = list_players[j].score.reduce((a,b) => a + b);
//         var l = list_players[j].score.length
//         console.log(sum + " " + 1)
//         average = list_players[j].score.reduce((a,b)=> a + b)/ list_players[j].score.length;
//         break;
        
//     }

//   }
//   for(let i=0; i<n; i++){
//     for (let ii =0; ii<n; ii++){
//         if (list_players[ii].score.length > max_len){
//             max_len=list_players[i].score.length;
//             index = ii;
//         }
//         if(list_players[ii].score.length == max_len && list_players[ii].score.length!=0)
//         {
//             if(list_players[ii].score.length.reduce((a,b) => a + b)/ list_players[ii].score.length<average){
//             index = ii;
//             average = list_players[i].score.reduce((a,b) => a + b) / list_players[i].score.length;

//         }
    
//     }
       
//     }
//     max_len=0
//     list_records.push(list_players[index])
//     list_players.splice(index,1)
//     index = 0;
//   }
//  this.setState({three_bests : list_records})
//   }


  handleTurnEnd = () => {
    const newTurnIndex = (this.state.turnIndex + 1) % this.props.gamers.length;
    this.setState({ turnIndex: newTurnIndex });
    console.log(this.state.turnIndex)
  }

  handleAddGamer = (name) => {
    const newGamers = [...this.state.gamers, { name }];
    this.setState({ gamers: newGamers });
  }

  handleDeleteGamer = (name) => {
   
   if ()
  }

  render() {
    var currentGamer = this.props.gamers[this.state.turnIndex];
    //npthis.Three_best_players(this.state.gamers)
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

        />
      </li>
    ));

    // var score = [];
    // for (var i = 0; i < gamers.length; i++) {
    //   score += [gamers[i].content.state.name, gamers[i].content.state.score];
    // }
    // console.log(score);

    return (
      <div>
        <ul style={{listStyleType:"none", display: "flex", justifyContent: "space-around", padding: '20px', margin: 'auto' }}>{gamers}</ul>
       
      </div>
    );
  }
}

export default GamerPanel;
