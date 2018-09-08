import React, {Component} from 'react';
import {connect} from 'react-redux';

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

    sendComment = (event) => {
        event.preventDefault();
        const action = {type: 'SET_COMMENT', payload: this.state.comment}
        this.props.dispatch(action);
        
        this.props.history.push('/success')
    }

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

const mapReduxStateToProps = (reduxState) ({
    reduxState,
})
export default connect(mapReduxStateToProps)(CommentsView);