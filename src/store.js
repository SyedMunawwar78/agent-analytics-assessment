import { legacy_createStore as createStore, applyMiddleware , compose } from 'redux';
import {thunk} from 'redux-thunk';
import rootReducer from './redux/reducers';

const middleWare = [
    thunk
]

const store = createStore(rootReducer, compose(
    applyMiddleware(...middleWare),
    window.__REDUX_DEVTOOLS_EXTENSION__
      && window.__REDUX_DEVTOOLS_EXTENSION__()
  ),);

export default store;
