import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
                

class SuccessView extends Component {

    sendToStart = () => {
        this.props.history.push('/')
    }

    render () {
        return (
            <div>
                <h2>Thank you!</h2>
                <Card className="card">
                    <CardContent>
                        <Typography component="div">
                            <Button variant="contained" color="primary" onClick={this.sendToStart}>Send New Feedback</Button>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        );
    };
};

export default SuccessView;