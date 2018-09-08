import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';

class CommentsView extends Component {

    constructor() {
        super();
        this.state = {
            comment: '',
        }
    }

    // Function for setting state when there is a change
    // in the form
    handleCommentChange = (event) => {
        this.setState({
            comment: event.target.value,
        })
        console.log(this.state.comment);
    }

    // Function to set the comment in redux and then send the information 
    // to the database
    sendComment = (event) => {
        event.preventDefault();
        const action = {type: 'SET_COMMENT', payload: this.state.comment}
        this.props.dispatch(action);
        axios({
            method: 'POST',
            url: '/feedback',
            data: this.props.reduxState.feedback
        }).then((response) => {
            this.props.history.push('/success');
            alert('Feedback was sent!');
        }).catch((error) => {
            console.log('Error', error);
            alert('There was an error sending your feedback');
        });// End axios request
    }//End sendComment

    render () {
        return (
            <div>
                <h3>Page 4 of 4</h3>
                <br />
                <form onSubmit={this.sendComment}>
                    <label>Would you like to leave a comment?</label>
                    <input type="text" onChange={this.handleCommentChange}/>
                    <br />
                    <button type="submit">Send Feedback</button>
                </form>
            </div>
        );
    };
};

const mapReduxStateToProps = (reduxState) => ({
    reduxState,
})
export default connect(mapReduxStateToProps)(CommentsView);