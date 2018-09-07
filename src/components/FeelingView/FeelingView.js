import React, {Component} from 'react';
import {connect} from 'react-redux';

class FeelingView extends Component {

    constructor() {
        super();
        this.state = {
            feeling: '',
        }
    }

    // Function for setting state when there is a change
    // in the form
    handleFeelingChange = (event) => {
        this.setState({
            feeling: Number(event.target.value),
        })
        console.log(this.state.feeling);
    }

    sendFeeling = (event) => {
        event.preventDefault();
        const action = {type: 'SET_FEELING', payload: this.state.feeling}
        this.props.dispatch(action);
        this.props.history.push('/understanding')
    }

    render () {
        return (
            <div>
                <h3>Page 1 of 4</h3>
                <br />
                <form onSubmit={this.sendFeeling}>
                    <label>How are you feeling today?</label>
                    <input type="number" value={this.state.feeling} onChange={this.handleFeelingChange}></input>
                    <br />
                    <button type="submit">Next</button>
                </form>
            </div> 
        );
    };
};

export default connect()(FeelingView);