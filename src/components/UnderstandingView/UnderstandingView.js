import React, {Component} from 'react';
import {connect} from 'react-redux';

class UnderstandingView extends Component {

    constructor() {
        super();
        this.state = {
            understanding: '',
        }
    }

    // Function for setting state when there is a change
    // in the form
    handleUnderstandingChange = (event) => {
        this.setState({
            understanding: Number(event.target.value),
        })
        console.log(this.state.understanding);
    }

    sendUnderstanding = (event) => {
        event.preventDefault();
        const action = {type: 'SET_UNDERSTANDING', payload: this.state.understanding}
        this.props.dispatch(action);
        this.props.history.push('/support')
    }
    render () {
        return (
            <div>
                <h3>Page 2 of 4</h3>
                <br />
                <form onSubmit={this.sendUnderstanding}>
                    <label>How well do you understand today's material?</label>
                    <input type="number" onChange={this.handleUnderstandingChange} />
                    <br />
                    <button type="submit">Next</button>
                </form>
            </div>
        );
    };
};

export default connect()(UnderstandingView);