import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootSaga from './sagas';
import giphyAppReducer from './reducer';


const sagaMiddleware = createSagaMiddleware();
const store = createStore(giphyAppReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

export default store;
