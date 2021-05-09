import { createStore } from 'redux';
import reducer from '../utils/reducers';

const store = createStore(reducer);  // creates a store

export default store;