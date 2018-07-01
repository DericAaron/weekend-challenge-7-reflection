import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

//redux imports
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import logger from 'redux-logger';


//reducers
const feedback = (state = {}, action) => {
    if(action.type === 'ADD_INPUT'){
        return {...state, [action.var]: action.payload};
    }
    else if(action.type === 'RESET'){
        return {};
    }

    return state;

} //end feedback

//store
const store = createStore(
    combineReducers({feedback}),
    applyMiddleware(logger)
);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
