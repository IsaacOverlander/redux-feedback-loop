import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

// Blank object for creating feedback
const blankFeedback = {
    feeling: 0,
    understanding: 0,
    support: 0,
    comments: '',
}

// Reducer for storing feedback information
const feedback = (state = blankFeedback, action) => {
    // Sets feeling
    if (action.type === 'SET_FEELING') {
        return { ...state, feeling: action.payload, }
    }
    // Sets understanding
    else if (action.type === 'SET_UNDERSTANDING') {
        return { ...state, understanding: action.payload }
    }
    // Sets support
    else if (action.type === 'SET_SUPPORT') {
        return { ...state, support: action.payload }
    }
    // Sets commnt
    else if (action.type === 'SET_COMMENT') {
        return { ...state, comments: action.payload };
    }
    // returns current state if no actions match
    return state;
}

// Reducer for storing an array of feedback
const allFeedback = (state = [], action) => {
    // Adds any new feedback to the array when called
    if (action.type === 'SET_ALLFEEDBACK') {
        return action.payload;
    }
    // returns current state if no actions match
    return state;
}

const storeInstance = createStore(
    combineReducers({
        feedback,
        allFeedback,
    }),
    applyMiddleware(logger),
)

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
