export const FETCH_GIFS = 'FETCH_GIFS';
export const FETCH_GIF = 'FETCH_GIF';
export const REQUEST_GIFS_BY_QUERY = 'REQUEST_GIFS_BY_QUERY';
export const REQUEST_GIFS_BY_QUERY_SUCCEEDED = 'REQUEST_GIFS_BY_QUERY_SUCCEEDED';
export const REQUEST_GIFS_BY_QUERY_FAILED = 'REQUEST_GIFS_BY_QUERY_FAILED';
export const REQUEST_GIF_BY_ID = 'REQUEST_GIF_BY_ID';
export const REQUEST_GIF_BY_ID_SUCCEEDED = 'REQUEST_GIF_BY_ID_SUCCEEDED';
export const REQUEST_GIF_BY_ID_FAILED = 'REQUEST_GIF_BY_ID_FAILED';
export const DISCARD_GIF = 'DISCARD_GIF';

export function fetchGifs(count, query) {
  return {
    type: FETCH_GIFS,
    payload: {
      gifsCount: count,
      query,
    }
  };
}

export function fetchGif(id) {
  return {
    type: FETCH_GIF,
    payload: {
      id,
    }
  };
}

export function requestGifsByQuery(count, query) {
  return {
    type: REQUEST_GIFS_BY_QUERY,
    payload: {
      gifsCount: count,
      query,
    },
  };
}

export function requestGifsByQuerySucceeded(gifs) {
  return {
    type: REQUEST_GIFS_BY_QUERY_SUCCEEDED,
    payload: {
      minifiedGifs: gifs,
      error: {
        occur: false,
        message: '',
      },
    },
  };
}

export function requestGifsByQueryFailed() {
  return {
    type: REQUEST_GIFS_BY_QUERY_FAILED,
    payload: {
      error: {
        occur: true,
        message: 'Failed to load gifs by query!', 
      },
    },
  };
}

export function requestGifById(id) {
  return {
    type: REQUEST_GIF_BY_ID,
    payload: {
      gifOriginal: {
        id,
      } ,
    }
  };
}

export function requestGifByIdSucceeded(gif) {
  return {
    type: REQUEST_GIF_BY_ID_SUCCEEDED,
    payload: {
      gifOriginal: gif,
      error: {
        occur: false,
        message: '',
      },
    },
  };
}

export function requestGifByIdFailed() {
  return {
    type: REQUEST_GIF_BY_ID_FAILED,
    payload: {
      error: {
        occur: true,
        message: 'Failed to load gif by ID!',
      },
    },
  };
}

export function discardGif() {
  return {
    type: DISCARD_GIF,
  };
}
