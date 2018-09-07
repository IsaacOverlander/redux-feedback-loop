import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import logger from 'redux-logger';

const blankFeedback = {
    feeling: 0,
    understanding: 0,
    support: 0,
    comments: '',
}

// Reducer for storing feedback information
const feedback = (state = blankFeedback, action) => {
    if (action.type === 'SET_FEELING') {
        return {...state, feeling: action.payload,}
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
