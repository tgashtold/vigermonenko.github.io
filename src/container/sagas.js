import { put, takeEvery, all } from 'redux-saga/effects';

import apiHandler from '../APIs/GiphyApi';
import {
  requestGifsByQuery,
  requestGifsByQuerySucceeded,
  requestGifsByQueryFailed,
  requestGifById,
  requestGifByIdSucceeded,
  requestGifByIdFailed,
  FETCH_GIFS,
  FETCH_GIF,
} from './actions';


function* getGifsByQueryAsync({ payload }) {
  try {
    yield put(requestGifsByQuery(payload.gifsCount, payload.query));
    const result = yield apiHandler.getGifsByQuery(payload.query, 0, payload.gifsCount);
    yield put(requestGifsByQuerySucceeded(result.data));
  } catch (error) {
    yield put(requestGifsByQueryFailed());
  }
}

function* getGifByIdAsync({ payload }) {
  try {
    yield put(requestGifById(payload.id));
    const result = yield apiHandler.getGifById(payload.id);

    yield put(requestGifByIdSucceeded({
      id: payload.id,
      imageUrl: result.data.images.original.url,
      title: result.data.title,
      uploadDatetime: result.data.import_datetime,
      author: result.data.username || 'unknown',
      authorAvatarUrl: result.data.user ? result.data.user.avatar_url : '',
    }));
  } catch(error) {
    yield put(requestGifByIdFailed());
  }
}

function* watchGetGifsByQueryAsync() {
  yield takeEvery(FETCH_GIFS, getGifsByQueryAsync);
}

function* watchGetGifByIdAsync() {
  yield takeEvery(FETCH_GIF, getGifByIdAsync);
}

export default function* rootSaga() {
  yield all([
    watchGetGifsByQueryAsync(),
    watchGetGifByIdAsync(),
  ]);
}
