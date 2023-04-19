import './App.css';
import React from 'react';
import ReactDOM from "react-dom";
import Gamer from './Gamer';

var gamers=[];

export class Gamer_AddForm extends React.Component {

    handleClick = (event) => {
        gamers.push(<Gamer name={event.target.value} />);
        ReactDOM.render(gamers, document.getElementById('gamersApp'));

    };

    render() {
        return (
            <div >
                <form target="_self" >
                    <label>Name:
                        <input type="text" id="fname" name="firstname" placeholder="Your name.." />
                    </label>
                    <label>Email:</label>
                    <input type="text" id="fname" name="email" placeholder="Email.." />
                    <button onClick={this.handleClick}>Add</button>
                </form>
            </div>
        );
    }

}
export default Gamer_AddForm;