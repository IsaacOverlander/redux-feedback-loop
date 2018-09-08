import React, {Component} from 'react';

class SuccessView extends Component {

    sendToStart = () => {
        this.props.history.push('/')
    }

    render () {
        return (
            <div>
                <h2>Thank you!</h2>
                <br />
                <button onClick={this.sendToStart}>Leave New Feedback</button>
            </div>
        );
    };
};

export default SuccessView;