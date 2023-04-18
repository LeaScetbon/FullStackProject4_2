import './App.css';
import React from 'react';
import ReactDOM from "react-dom";

export class Gamer_AddForm extends React.Component {


    render() {
        return(
            <div > 
            <form>
            <label>Name:</label>
            <input type="text" id="fname" name="firstname" placeholder="Your name.."/>
            <label>Email:</label>
            <input type="text" id="fname" name="email" placeholder="Email.."/>
            <button>Add</button>
           </form>
            </div>
      
        );
    
      }
}
export default Gamer_AddForm;