import React, {Component} from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

class FeedbackItem extends Component {

    //function to delete feedback

    deletefeedback = () => {
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

    render() {
        return (
            <TableRow>
                <TableCell>{this.props.feedback.feeling}</TableCell>
                <TableCell>{this.props.feedback.understanding}</TableCell>
                <TableCell>{this.props.feedback.support}</TableCell>
                <TableCell>{this.props.feedback.comments}</TableCell>
                <TableCell><button onClick={this.deletefeedback}>Delete</button></TableCell>
            </TableRow>
        )
    }
}

export default FeedbackItem;