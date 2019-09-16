import { put, takeEvery, all } from 'redux-saga/effects';
import { push, replace } from 'connected-react-router';

import createRequestSaga from '../services/sagaCreator';
import apiHandler from '../services/GiphyApi';
import {
  fetchGifs,
  fetchGif,
  requestGifsByQuery,
  requestGifById,
  changeLocation,
} from './reducer';


const requestByQuery = (payload) => apiHandler.getGifsByQuery(payload.query, 0, payload.count);
const requestById = (payload) => apiHandler.getGifById(payload);
const getGifsByQueryAsync = createRequestSaga(requestGifsByQuery, requestByQuery);
const getGifsByIdAsync = createRequestSaga(requestGifById, requestById);

function* changeLocationAsync({ payload }) {
  if (payload.replace) {
    yield put(replace(payload.path, payload.state));
  } else {
    yield put(push(payload.path, payload.state));
  }
}

function* watchSubmit() {
  yield takeEvery(changeLocation, changeLocationAsync);
}

function* watchGetGifsByQueryAsync() {
  yield takeEvery(fetchGifs, getGifsByQueryAsync);
}

function* watchGetGifByIdAsync() {
  yield takeEvery(fetchGif, getGifsByIdAsync);
}

export default function* rootSaga() {
  yield all([
    watchSubmit(),
    watchGetGifsByQueryAsync(),
    watchGetGifByIdAsync(),
  ]);
}
