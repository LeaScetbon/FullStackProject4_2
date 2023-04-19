import './App.css';
import React from 'react';
import ReactDOM from "react-dom";
import Gamer from './Gamer';

var gamers = [];

export class Gamer_AddForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
        };
    }

    handleClickName = (event) => {
        this.setState({ name: event.target.value });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onAdd(this.state.name);
        this.setState({ name: '' });
    };

    render() {
        return (
            <div >
                <form onSubmit={this.handleSubmit} >
                    <label>Name:
                        <input type="text" value={this.state.name} onChange={this.handleClickName} />
                    </label>
                    <button class='buttonStyleClass' type="submit">Add</button>
                </form>
            </div>
        );
    }

}
export default Gamer_AddForm;