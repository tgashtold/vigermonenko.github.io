import { put, call } from 'redux-saga/effects';


const createRequestSaga = (action, request) => function* saga({ payload }) {
  try {
    yield put(action.request(payload));
    const result = yield call(request, payload);
    yield put(action.success(result));
  } catch (error) {
    yield put(action.failed());
  }
};

export default createRequestSaga;
