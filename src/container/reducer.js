import { createAction, handleActions } from 'redux-actions';
import { onLocationChanged } from 'connected-react-router/lib/actions';

import createRequestActions from '../services/actionCreator';
import { homePath } from '../services/webroot';


export const fetchGifs = createAction('FETCH_GIFS');
export const fetchGif = createAction('FETCH_GIF');
export const uploadGif = createAction('UPLOAD_GIF');
export const editGif = createAction('EDIT_GIF');

export const putGif = createRequestActions('PUG_GIF');
export const updateGif = createRequestActions('UPDATE_GIF');
export const requestGifsByQuery = createRequestActions('REQUEST_GIFS_BY_QUERY');
export const requestGifById = createRequestActions('REQUEST_GIF_BY_ID');

export const changeLocation = createAction('CHANGE_LOCATION');
export const pushHistory = createAction('PUSH_HISTORY');
export const replaceHistory = createAction('REPLACE_HISTORY');
export const discardGif = createAction('DISCARD_GIF');


const defaultGifOriginal = {
  id: '',
  url: '',
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
  lastGifId: '',
  gifOriginal: { ...defaultGifOriginal },
};

const defaultEditPageState = {
  editedGif: {
    id: '',
    newTitle: '',
    newAuthorUsername: '',
  },
  success: false,
};

const defaultUploadPageState = {
  gifRequestedToUpload: {
    fileName: '',
    fileSize: 0,
    title: '',
    username: '',
  },
  uploaded: false,
};

export const infoPageReducer = handleActions(
  {
    [fetchGif]: (state, action) => (
      { ...state, lastGifId: action.payload }
    ),
    [requestGifById.request]: (state, action) => (
      { ...state, lastGifId: action.payload }
    ),
    [requestGifById.success]: (state, action) => {
      const gif = action.payload.data;
      return {
        ...state,
        gifOriginal: {
          id: gif.id,
          url: gif.images.original.url,
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
    [onLocationChanged]: (state, action) => {
      const path = action.payload.location.pathname;
      return path === homePath ? { ...state, gifs: [] } : { ...state };
    },
  },
  defaultSearchPageState,
);


export const editPageReducer = handleActions(
  {
    [updateGif.request]: (state, action) => (
      {
        ...state,
        editedGif: {
          id: action.payload.id,
          newTitle: action.payload.title,
          newAuthorUsername: action.payload.author,
        },
      }
    ),
    [updateGif.success]: (state) => (
      { ...state, success: true }
    ),
    [updateGif.failed]: (state) => (
      { ...state, success: false }
    ),
  },
  defaultEditPageState,
);

export const uploadPageReducer = handleActions(
  {
    [putGif.request]: (state, action) => (
      {
        ...state,
        gifRequestedToUpload: {
          fileName: action.payload.gif.image.name,
          fileSize: action.payload.gif.image.size,
          title: action.payload.gif.title,
          username: action.payload.gif.author,
        },
      }
    ),
    [putGif.success]: (state) => (
      {
        ...state,
        uploaded: true,
      }
    ),
    [putGif.failed]: (state) => (
      {
        ...state,
        uploaded: false,
      }
    ),
  },
  defaultUploadPageState,
);
