import { takeEvery, all } from 'redux-saga/effects';

import createRequestSaga from '../services/sagaCreator';
import apiHandler from '../services/GiphyApi';
import {
  requestGifsByQuery,
  requestGifById,
  fetchGifs,
  fetchGif,
} from './reducer';

const requestByQuery = (payload) => apiHandler.getGifsByQuery(payload.query, 0, payload.count);
const requestById = (payload) => apiHandler.getGifById(payload);
const getGifsByQueryAsync = createRequestSaga(requestGifsByQuery, requestByQuery);
const getGifsByIdAsync = createRequestSaga(requestGifById, requestById);


function* watchGetGifsByQueryAsync() {
  yield takeEvery(fetchGifs, getGifsByQueryAsync);
}

function* watchGetGifByIdAsync() {
  yield takeEvery(fetchGif, getGifsByIdAsync);
}

export default function* rootSaga() {
  yield all([
    watchGetGifsByQueryAsync(),
    watchGetGifByIdAsync(),
  ]);
}
