import { put, takeEvery, all } from 'redux-saga/effects';
import { push } from 'connected-react-router';

import createRequestSaga from '../services/sagaCreator';
import apiHandler from '../services/GiphyApi';
import { searchPath, countParamName, queryParamName } from '../services/webroot';
import {
  requestGifsByQuery,
  requestGifById,
  fetchGifs,
  fetchGif,
  submit,
} from './reducer';


const requestByQuery = (payload) => apiHandler.getGifsByQuery(payload.query, 0, payload.count);
const requestById = (payload) => apiHandler.getGifById(payload);
const getGifsByQueryAsync = createRequestSaga(requestGifsByQuery, requestByQuery);
const getGifsByIdAsync = createRequestSaga(requestGifById, requestById);

function* pushOnsubmit({ payload }) {
  const urlParameters = new URLSearchParams('');
  urlParameters.append(queryParamName, payload.query);
  urlParameters.append(countParamName, payload.count);
  yield put(push(searchPath + urlParameters.toString()));
}

function* watchSubmit() {
  yield takeEvery(submit, pushOnsubmit);
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
