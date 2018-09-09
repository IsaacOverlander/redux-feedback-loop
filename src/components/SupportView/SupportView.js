import React, {Component} from 'react';
import {connect} from 'react-redux';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

class SupportView extends Component {

    constructor() {
        super();
        this.state = {
            support: '',
        }
    }

    // Function for setting state when there is a change
    // in the form
    handleSupportChange = (event) => {
        this.setState({
            support: Number(event.target.value),
        })
        console.log(this.state.support);
    }

    sendSupport = (event) => {
        event.preventDefault();
        const action = {type: 'SET_SUPPORT', payload: this.state.support}
        this.props.dispatch(action);
        this.props.history.push('/comments')
    }

    render () {
        return (
            <div>
                <h2>Page 3 of 4</h2>
                <Card className="card">
                    <CardContent>
                        <Typography color="textSecondary">
                            How well are you being supported?
                        </Typography>
                        <Typography component="div">
                            <Input type="number" value={this.state.support} onChange={this.handleSupportChange}></Input>
                            <br />
                            <Button variant="contained" color="primary" onClick={this.sendSupport}>Next</Button>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        );
    };
};

export default connect()(SupportView);