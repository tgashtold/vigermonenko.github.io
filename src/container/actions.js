export const CACHE_GIFS = 'CACHE_GIFS';
export const DISPLAY_GIF_INFO = 'DISPLAY_GIF_INFO';
export const DISCARD_GIF = 'DISCARD_GIF';

export function cacheGifs(gifs, count, query) {
  return {
    type: CACHE_GIFS,
    payload: {
      gifsCount: count,
      searchSectionGifs: gifs,
      query,
    },
  };
}

export function displayGifInfo(gif) {
  return {
    type: DISPLAY_GIF_INFO,
    payload: {
      infoSectionGif: gif,
    },
  };
}

export function discardGif() {
  return {
    type: DISCARD_GIF,
  };
}
