import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

class UnderstandingView extends Component {

    constructor() {
        super();
        this.state = {
            understanding: '',
        }
    }

    // Function for setting state when there is a change
    // in the form
    handleUnderstandingChange = (event) => {
        this.setState({
            understanding: Number(event.target.value),
        })
        console.log(this.state.understanding);
    }

    sendUnderstanding = (event) => {
        event.preventDefault();
        const action = { type: 'SET_UNDERSTANDING', payload: this.state.understanding }
        this.props.dispatch(action);
        this.props.history.push('/support')
    }
    render() {
        return (
            <div>
                <h2>Page 2 of 4</h2>
                <Card className="card">
                    <CardContent>
                        <Typography color="textSecondary">
                            How well do you understand today's material?
                        </Typography>
                        <Typography component="div">
                            <Input type="number" value={this.state.understanding} onChange={this.handleUnderstandingChange}></Input>
                            <br />
                            <Button variant="contained" color="primary" onClick={this.sendUnderstanding}>Next</Button>
                        </Typography>
                    </CardContent>
                </Card>
                
            </div>
        );
    };
};

export default connect()(UnderstandingView);