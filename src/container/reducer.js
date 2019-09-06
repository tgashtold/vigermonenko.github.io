import {
  REQUEST_GIFS_BY_QUERY,
  REQUEST_GIFS_BY_QUERY_SUCCEEDED,
  REQUEST_GIFS_BY_QUERY_FAILED,
  REQUEST_GIF_BY_ID,
  REQUEST_GIF_BY_ID_SUCCEEDED,
  REQUEST_GIF_BY_ID_FAILED,
  DISCARD_GIF,
} from './actions';

const defaultGifOriginal = {
  id: '',
  imageUrl: '',
  title: '',
  uploadDatetime: '',
  author: 'unknown',
  authorAvatarUrl: '',
};

const initialState = {
  error : {
    occur: false,
    message: '', 
  },
  minifiedGifs: [],
  query: '',
  gifsCount: 0,
  gifOriginal: defaultGifOriginal,
};

function giphyAppReducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_GIFS_BY_QUERY:
      return { ...state, ...action.payload };
    case REQUEST_GIFS_BY_QUERY_SUCCEEDED:
      return { ...state, ...action.payload };
    case REQUEST_GIFS_BY_QUERY_FAILED: 
      return { ...state, ...action.payload };
    case REQUEST_GIF_BY_ID:
      return { ...state, ...action.payload };
    case REQUEST_GIF_BY_ID_FAILED:
      return { ...state, ...action.payload };
    case REQUEST_GIF_BY_ID_SUCCEEDED:
      return { ...state, ...action.payload };
    case DISCARD_GIF:
      return { ...state, gifOriginal: defaultGifOriginal };
    default:
      return state;
  }
}

export default giphyAppReducer;
