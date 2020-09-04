import {createStore, combineReducers} from 'redux';
import reducer from './reducer';

const reducers = combineReducers({todoPage: reducer});

let store = createStore(reducers);


export default store;