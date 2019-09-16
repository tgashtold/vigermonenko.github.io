import { createBrowserHistory } from 'history';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import {
  searchPageReducer,
  infoPageReducer,
  editPageReducer,
  uploadPageReducer,
} from './reducer';
import rootSaga from './sagas';


const browserHistory = createBrowserHistory();

const createConnectedRouter = (history) => combineReducers({
  router: connectRouter(history),
  searchPage: searchPageReducer,
  infoPage: infoPageReducer,
  editingPage: editPageReducer,
  uploadPage: uploadPageReducer,
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  createConnectedRouter(browserHistory),
  composeWithDevTools(
    applyMiddleware(
      sagaMiddleware,
      routerMiddleware(browserHistory),
    ),
  ),
);
sagaMiddleware.run(rootSaga);

export {
  store,
  browserHistory,
};
