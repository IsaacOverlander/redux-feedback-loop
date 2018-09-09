import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import swal from 'sweetalert';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';



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
                this.props.history.push('success');
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
                <h2>Page 4 of 4</h2>
                <Card className="card">
                    <CardContent>
                        <Typography color="textSecondary">
                            Would you like to leave a comment?
                        </Typography>
                        <Typography component="div">
                            <Input type="text" value={this.state.comment} onChange={this.handleCommentChange}></Input>
                            <br />
                            <Button variant="contained" color="primary" onClick={this.sendComment}>Next</Button>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        );
    };
};

const mapReduxStateToProps = (reduxState) => ({
    reduxState,
})
export default connect(mapReduxStateToProps)(CommentsView);