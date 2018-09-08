import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

const blankFeedback = {
    feeling: 0,
    understanding: 0,
    support: 0,
    comment: '',
}

// Reducer for storing feedback information
const feedback = (state = blankFeedback, action) => {
    if (action.type === 'SET_FEELING') {
        return { ...state, feeling: action.payload, }
    }
    else if (action.type === 'SET_UNDERSTANDING') {
        return { ...state, understanding: action.payload }
    }
    else if (action.type === 'SET_SUPPORT') {
        return { ...state, support: action.payload }
    }
    else if (action.type === 'SET_COMMENT') {
        return { ...state, comment: action.payload }
    }
    return state;
}

const storeInstance = createStore(
    combineReducers({
        feedback,
    }),
    applyMiddleware(logger),
)

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
