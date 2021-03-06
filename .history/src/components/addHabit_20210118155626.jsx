import React, { Component } from 'react';

class AddHabit extends Component {
    addHabit = () => {
        console.log('진입');
        console.log(document.querySelector('.add-input'));
        this.props.onAddHabit(document.querySelector('#addHabbitText'));

    };

    render() {
        return (
            <>
                <input className="add-input"></input>
                <button className="add-button" onClick={this.addHabit}>Add</button>
            </>
        );
    }
}

export default AddHabit;