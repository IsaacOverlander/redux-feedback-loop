import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import FeedbackItem from '../FeedbackItem/FeedbackItem.js';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

class AdminView extends Component {

    componentDidMount = () => {
        this.getFeedback();
    }

    getFeedback = () => {
        axios({
            method: 'GET',
            url: '/feedback'
        }).then((response) => {
            const action = { type: 'SET_ALLFEEDBACK', payload: response.data };
            this.props.dispatch(action);
        }).catch((error) => {
            console.log(error);
        })
    }

    render() {
        return (
            <div>
                <h2>Feedback Results</h2>
                <Paper>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Feeling</TableCell>
                                <TableCell>Understanding</TableCell>
                                <TableCell>Support</TableCell>
                                <TableCell>Comments</TableCell>
                                <TableCell>Delete</TableCell>
                                <TableCell>Flag for Further Review</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.props.reduxState.allFeedback.map((feedback) => {
                                return (<FeedbackItem key={feedback.id} feedback={feedback} getFeedback={this.getFeedback} />);
                            })}
                        </TableBody>
                    </Table>
                </Paper>
            </div>
        );
    };
};

const mapReduxStateToProps = (reduxState) => ({
    reduxState
});
export default connect(mapReduxStateToProps)(AdminView);