import { put, takeEvery, all } from 'redux-saga/effects';

import apiHandler from '../services/GiphyApi';
import {
  requestGifsByQuery,
  requestGifById,
} from './reducer';


function* getGifsByQueryAsync({ payload }) {
  try {
    yield put(requestGifsByQuery.request(payload.count, payload.query));
    const result = yield apiHandler.getGifsByQuery(payload.query, 0, payload.count);
    yield put(requestGifsByQuery.success({ gifs: result.data }));
  } catch (error) {
    yield put(requestGifsByQuery.failed());
  }
}

function* getGifByIdAsync({ payload }) {
  try {
    yield put(requestGifById.request({ id: payload }));
    const result = yield apiHandler.getGifById(payload);

    yield put(requestGifById.success({
      gifOriginal: {
        id: payload.id,
        imageUrl: result.data.images.original.url,
        title: result.data.title,
        uploadDatetime: result.data.import_datetime,
        author: result.data.username || 'unknown',
        authorAvatarUrl: result.data.user ? result.data.user.avatar_url : '',
      },
    }));
  } catch (error) {
    yield put(requestGifById.failed());
  }
}

function* watchGetGifsByQueryAsync() {
  yield takeEvery('FETCH_GIFS', getGifsByQueryAsync);
}

function* watchGetGifByIdAsync() {
  yield takeEvery('FETCH_GIF', getGifByIdAsync);
}

export default function* rootSaga() {
  yield all([
    watchGetGifsByQueryAsync(),
    watchGetGifByIdAsync(),
  ]);
}
