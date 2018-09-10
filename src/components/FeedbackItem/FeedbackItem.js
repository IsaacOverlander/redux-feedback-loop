import React, {Component} from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Button from '@material-ui/core/Button';
import {connect} from 'react-redux';

class FeedbackItem extends Component {

    // Function to delete feedback
    deleteFeedback = () => {
        swal({
            text: 'Are you sure?',
            buttons: true,
        }).then((value) => {
            if (value) {
                axios({
                    method: 'DELETE',
                    url: '/feedback/' + this.props.feedback.id
                }).then((response) => {
                    // Calls getFeedback to refresh the page
                    this.props.getFeedback();
                    swal('Feedback was deleted.');
                }).catch((error) => {
                    console.log(error);
                    swal('There was a problem deleting the feedback.');
                });// End axios request
            }
            else {
                swal('The feedback was not deleted')
            }
        })
        
    }// end deleteFeedback

    // Function to flag feedback
    flagFeedback = () => {
        const action = {type: 'MARK_FLAGGED'}
        this.props.dispatch(action);
        axios({
            method: 'PUT',
            url: '/feedback/' + this.props.feedback.id
        }).then((reponse) => {
            this.props.getFeedback();
        }).catch((error) => {
            swal('There was an error flagging the feedback.');
        });// End axios request
    }// End flagFeedback

    

    render() {
        return (
            <TableRow className={`${this.props.feedback.flagged}`}>
                <TableCell>{this.props.feedback.feeling}</TableCell>
                <TableCell>{this.props.feedback.understanding}</TableCell>
                <TableCell>{this.props.feedback.support}</TableCell>
                <TableCell>{this.props.feedback.comments}</TableCell>
                <TableCell><Button variant="contained" color="secondary" onClick={this.deleteFeedback}>Delete</Button></TableCell>
                <TableCell><Button variant="contained" color="primary" onClick={this.flagFeedback}>Flag</Button></TableCell>
            </TableRow>
        )
    }
}
const mapReduxStateToProps = (reduxState) => ({
    reduxState,
})
export default connect(mapReduxStateToProps)(FeedbackItem);