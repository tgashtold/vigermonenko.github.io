import { combineReducers } from 'redux';
import { createAction, handleActions } from 'redux-actions';

import createRequestActions from '../services/actionCreator';


export const requestGifsByQuery = createRequestActions('REQUEST_GIFS_BY_QUERY');
export const requestGifById = createRequestActions('REQUEST_GIF_BY_ID');
export const fetchGifs = createAction('FETCH_GIFS');
export const fetchGif = createAction('FETCH_GIF');
export const discardGif = createAction('DISCARD_GIF');


const defaultGifOriginal = {
  id: '',
  imageUrl: '',
  title: '',
  uploadDatetime: '',
  author: 'unknown',
  authorAvatarUrl: '',
};

const defaultErrorState = {
  error: {
    occur: false,
    message: '',
  },
};

const defaultSearchPageState = {
  gifs: [],
  query: '',
  count: 0,
};

const defaultInfoPageState = {
  gifOriginal: { ...defaultGifOriginal },
};


const infoPageReducer = handleActions(
  {
    FETCH_GIF: (state, action) => (
      { ...state, gifOriginal: { id: action.payload.id } }
    ),
    REQUEST_GIF_BY_ID: (state, action) => (
      { ...state, gifOriginal: { id: action.payload.id } }
    ),
    REQUEST_GIF_BY_ID_SUCCEEDED: (state, action) => (
      { ...state, gifOriginal: { ...action.payload.gifOriginal }, error: defaultErrorState }
    ),
    REQUEST_GIF_BY_ID_FAILED: (state) => (
      { ...state, error: { occur: true, message: 'Failed to get gifs by id!' } }
    ),
    DISCARD_GIF: (state) => (
      { ...state, gifOriginal: { ...defaultGifOriginal } }
    ),
  },
  defaultInfoPageState,
);


const searchPageReducer = handleActions(
  {
    FETCH_GIFS: (state, action) => (
      { ...state, ...action.payload }
    ),
    REQUEST_GIFS_BY_QUERY: (state, action) => (
      { ...state, ...action.payload }
    ),
    REQUEST_GIFS_BY_QUERY_SUCCEEDED: (state, action) => (
      { ...state, gifs: [...action.payload.gifs] }
    ),
    REQUEST_GIFS_BY_QUERY_FAILED: (state) => (
      { ...state, error: { occur: true, message: 'Failed to get gifs by query!' } }
    ),
    '@@router/LOCATION_CHANGE': (state, action) => {
      const path = action.payload.location.pathname;
      return path === '/' ? { ...state, gifs: [] } : { ...state };
    },
  },
  defaultSearchPageState,
);

export const rootReducer = combineReducers({
  searchPageReducer,
  infoPageReducer,
});
