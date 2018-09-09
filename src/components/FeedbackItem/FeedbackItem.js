import React, {Component} from 'react';
import axios from 'axios';
import swal from 'sweetalert';

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
            <tr>
                <td>{this.props.feedback.feeling}</td>
                <td>{this.props.feedback.understanding}</td>
                <td>{this.props.feedback.support}</td>
                <td>{this.props.feedback.comments}</td>
                <td><button onClick={this.deletefeedback}>Delete</button></td>
            </tr>
        )
    }
}

export default FeedbackItem;