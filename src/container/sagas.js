import { put, takeEvery, all } from 'redux-saga/effects';
import { push, replace } from 'connected-react-router';

import createRequestSaga from '../services/sagaCreator';
import apiHandler from '../services/GiphyApi';
import {
  uploadGif,
  fetchGifs,
  fetchGif,
  putGif,
  requestGifsByQuery,
  requestGifById,
  changeLocation,
  updateGif,
  editGif,
  pushHistory,
  replaceHistory,
} from './reducer';

const uploadGifSagaCallback = (payload) => {
  const { gif } = payload;
  alert(`Filename: ${gif.image.name}\nSize: ${gif.image.size} kb\nTitle: ${payload.gif.title}\nUser: ${payload.gif.author}`);
  return payload;
};

const editGifSagaCallback = (payload) => {
  alert(`Gif Id: ${payload.id}\nNew title: ${payload.title}\n${payload.author}`);
  return payload;
};

const uploadGifAsync = createRequestSaga(putGif, uploadGifSagaCallback);
const editGifAsync = createRequestSaga(updateGif, editGifSagaCallback);

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

function* pushHistoryAsync({ payload }) {
  yield put(push(payload.path, payload.state));
}

function* replaceHistoryAsync({ payload }) {
  yield put(replace(payload.path, payload.state));
}

function* watchPushHistory() {
  yield takeEvery(pushHistory, pushHistoryAsync);
}

function* watchReplaceHistory() {
  yield takeEvery(replaceHistory, replaceHistoryAsync);
}

function* watchUploadGif() {
  yield takeEvery(uploadGif, uploadGifAsync);
}

function* watchEditGif() {
  yield takeEvery(editGif, editGifAsync);
}

function* watchChangeLocation() {
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
    watchPushHistory(),
    watchReplaceHistory(),
    watchChangeLocation(),
    watchGetGifsByQueryAsync(),
    watchGetGifByIdAsync(),
    watchUploadGif(),
    watchEditGif(),
  ]);
}
