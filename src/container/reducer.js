import { createAction, handleActions } from 'redux-actions';

import createRequestActions from '../services/actionCreator';


export const requestGifsByQuery = createRequestActions('REQUEST_GIFS_BY_QUERY');
export const requestGifById = createRequestActions('REQUEST_GIF_BY_ID');
export const fetchGifs = createAction('FETCH_GIFS');
export const fetchGif = createAction('FETCH_GIF');
export const discardGif = createAction('DISCARD_GIF');
export const changeLocation = createAction('CHANGE_LOCATION');


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


export const infoPageReducer = handleActions(
  {
    [fetchGif]: (state, action) => (
      { ...state, gifOriginal: { id: action.payload } }
    ),
    [requestGifById.request]: (state, action) => (
      { ...state, gifOriginal: { id: action.payload } }
    ),
    [requestGifById.success]: (state, action) => {
      const gif = action.payload.data;
      return {
        ...state,
        gifOriginal: {
          id: gif.id,
          imageUrl: gif.images.original.url,
          title: gif.title,
          uploadDatetime: gif.import_datetime,
          author: gif.username || 'unknown',
          authorAvatarUrl: gif.user ? gif.user.avatar_url : '',
        },
        error: defaultErrorState,
      };
    },
    [requestGifById.failed]: (state) => (
      { ...state, error: { occur: true, message: 'Failed to get gifs by id!' } }
    ),
    [discardGif]: (state) => (
      { ...state, gifOriginal: { ...defaultGifOriginal } }
    ),
  },
  defaultInfoPageState,
);


export const searchPageReducer = handleActions(
  {
    [fetchGifs]: (state, action) => (
      { ...state, ...action.payload }
    ),
    [requestGifsByQuery.request]: (state, action) => (
      { ...state, ...action.payload }
    ),
    [requestGifsByQuery.success]: (state, action) => (
      { ...state, gifs: [...action.payload.data] }
    ),
    [requestGifsByQuery.failed]: (state) => (
      { ...state, error: { occur: true, message: 'Failed to get gifs by query!' } }
    ),
    onLocationChange: (state, action) => {
      const path = action.payload.location.pathname;
      return path === '/' ? { ...state, gifs: [] } : { ...state };
    },
  },
  defaultSearchPageState,
);
