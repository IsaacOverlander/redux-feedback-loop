import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

class FeelingView extends Component {

    constructor() {
        super();
        this.state = {
            feeling: '',
        }
    }


    // Function for setting state when there is a change
    // in the form
    handleFeelingChange = (event) => {
        this.setState({
            feeling: Number(event.target.value),
        })
        console.log(this.state.feeling);
    }

    sendFeeling = () => {
        const action = { type: 'SET_FEELING', payload: this.state.feeling }
        this.props.dispatch(action);
        this.props.history.push('/understanding')
    }

    render() {
        return (
            <div>
                <h2>Page 1 of 4</h2>
                <Card className="card">
                    <CardContent>
                        <Typography color="textSecondary">
                            How are you feeling today?
                        </Typography>
                        <Typography component="div">
                            <Input type="number" value={this.state.feeling} onChange={this.handleFeelingChange}></Input>
                            <br />
                            <Button variant="contained" color="primary" onClick={this.sendFeeling}>Next</Button>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        );
    };
};


export default connect()(FeelingView);