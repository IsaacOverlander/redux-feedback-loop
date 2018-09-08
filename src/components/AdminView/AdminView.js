import React, {Component} from 'react';
import {connect} from 'react-redux';

class AdminView extends Component {
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