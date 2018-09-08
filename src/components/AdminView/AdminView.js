import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import FeedbackItem from '../FeedbackItem/FeedbackItem.js'

class AdminView extends Component {

    componentDidMount = () => {
        this.getFeedback();
    }

    getFeedback = () => {
        axios({
          method: 'GET',
          url: '/feedback'  
        }).then((response) => {
            const action = {type: 'SET_ALLFEEDBACK', payload: response.data};
            this.props.dispatch(action);
        }).catch((error) => {
            console.log(error);
        })
    }

    render () {
        return (
            <div>
                <h2>Feedback Results</h2>
                <table>
                    <thead>
                        <tr>
                            <td>Feeling</td>
                            <td>Understanding</td>
                            <td>Support</td>
                            <td>Comments</td>
                            <td>Delete</td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.reduxState.allFeedback.map((feedback, i) => {
                            return (<FeedbackItem key={i} feedback={feedback}/>);
                        })}
                    </tbody>
                </table>
            </div>
        );
    };
};

const mapReduxStateToProps = (reduxState) => ({
    reduxState
});
export default connect(mapReduxStateToProps)(AdminView);