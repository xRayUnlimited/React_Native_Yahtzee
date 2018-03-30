import {
  createStore,
  compose,
  applyMiddleware
} from 'redux';
import apiMiddleware from './utils/apiMiddleware';
import axios from 'axios';
import rootReducer from './reducers/index';
import thunk from 'redux-thunk';

const options = {axios};

const enhancers = compose(
  applyMiddleware(thunk, apiMiddleware(options))
)

const store = createStore(rootReducer, {}, enhancers);

if (module.hot) {
  module.hot.accept('./reducers/', () => {
    const nextRootReducer = require('./reducers/index').default
    store.replaceReducer(nextRootReducer)
  })
}

export default store;