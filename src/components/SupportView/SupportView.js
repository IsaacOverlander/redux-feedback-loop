import React, {Component} from 'react';
import {connect} from 'react-redux';

class SupportView extends Component {

    constructor() {
        super();
        this.state = {
            support: '',
        }
    }

    // Function for setting state when there is a change
    // in the form
    handleSupportChange = (event) => {
        this.setState({
            support: Number(event.target.value),
        })
        console.log(this.state.support);
    }

    sendSupport = (event) => {
        event.preventDefault();
        const action = {type: 'SET_SUPPORT', payload: this.state.support}
        this.props.dispatch(action);
        this.props.history.push('/comments')
    }

    render () {
        return (
            <div>
                <h3>Page 3 of 4</h3>
                <br />
                <form onSubmit={this.sendSupport}>
                    <label>How well are you being supported?</label>
                    <input type="number" onChange={this.handleSupportChange}/>
                    <br />
                    <button type="submit" >Next</button>
                </form>
            </div>
        );
    };
};

export default connect()(SupportView);