import {
  CACHE_GIFS,
  DISPLAY_GIF_INFO,
  DISCARD_GIF,
} from './actions';

const defaultGifInfo = {
  originalImageUrl: '',
  title: '',
  uploadDatetime: '',
  author: 'unknown',
  authorAvatarUrl: '',
};

const initialState = {
  searchSectionGifs: [],
  query: '',
  gifsCount: 0,
  infoSectionGif: defaultGifInfo,
};

function giphyAppReducer(state = initialState, action) {
  switch (action.type) {
    case CACHE_GIFS:
      return { ...state, ...action.payload };
    case DISPLAY_GIF_INFO:
      return { ...state, ...action.payload };
    case DISCARD_GIF:
      return { ...state, infoSectionGif: defaultGifInfo };
    default:
      return state;
  }
}

export default giphyAppReducer;
