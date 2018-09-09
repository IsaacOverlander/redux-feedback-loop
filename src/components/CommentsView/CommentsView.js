import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import swal from 'sweetalert';

class CommentsView extends Component {

    constructor() {
        super();
        this.state = {
            comments: '',
        }
    }
    // Function for setting state when there is a change
    // in the form
    handleCommentChange = (event) => {
        this.setState({
            comments: event.target.value,
        })
    }

    // Function to set the comment in redux and then send the information 
    // to the database
    sendComment = (event) => {
        event.preventDefault();
        swal('sending your feedback...').then(() => {
            const action = { type: 'SET_COMMENT', payload: this.state.comments }
            this.props.dispatch(action);
        }).then(() => {
            axios({
                method: 'POST',
                url: '/feedback',
                data: this.props.reduxState.feedback
            }).then((response) => {
                swal('Your feedback was sent!');
            }).catch((error) => {
                console.log(error);
                swal('There was a problem sending your feedback.');
            });// End axios request
        }).catch((error) => {
            console.log(error);
            swal('there was an error sending your feedbacl')
        })
    }// End sendCommentToRedux

    render() {
        return (
            <div>
                <h3>Page 4 of 4</h3>
                <br />
                <form onSubmit={this.sendComment}>
                    <label>Would you like to leave a comment?</label>
                    <input type="text" onChange={this.handleCommentChange} />
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