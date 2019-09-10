import { combineReducers } from 'redux';
import { createActions, handleActions } from 'redux-actions';

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
  },
  defaultSearchPageState,
);


export const rootReducer = combineReducers({
  searchPageReducer,
  infoPageReducer,
});


export const {
  fetchGif,
  fetchGifs,

  requestGifsByQuery,
  requestGifsByQuerySucceeded,
  requestGifById,
  requestGifByIdSucceeded,

  discardGif,
  requestGifsByQueryFailed,
  requestGifByIdFailed,
} = createActions({
  FETCH_GIF: (id) => ({ id }),
  FETCH_GIFS: (count, query) => ({ count, query }),

  REQUEST_GIFS_BY_QUERY: (count, query) => ({ count, query }),
  REQUEST_GIFS_BY_QUERY_SUCCEEDED: (gifs) => ({ gifs }),
  REQUEST_GIF_BY_ID: (id) => ({ id }),
  REQUEST_GIF_BY_ID_SUCCEEDED: (gifOriginal) => ({ gifOriginal }),
},
'DISCARD_GIF',
'REQUEST_GIFS_BY_QUERY_FAILED',
'REQUEST_GIF_BY_ID_FAILED');
