const myApiKey = 'eBAQ4EQCrmqmNQej8cLMU0ZVD9UYr3Xd';
const siteUrl = 'https://api.giphy.com/';
const defaultPath = 'v1/gifs/';

class GiphyApi {
  constructor(apiKey) {
    this.apiKey = apiKey;

    this.HttpsGetRequestSettings = {
      method: 'GET',
      mode: 'cors',
    };
  }

  async getGifsByQuery(query, offset = 0, limit = 1) {
    const config = {
      api_key: this.apiKey,
      q: encodeURIComponent(query),
      offset,
      limit,
    };

    const response = await fetch(
      siteUrl + defaultPath + GiphyApi.formUrl('search', config),
      this.HttpsGetRequestSettings,
    );

    if (response.ok) {
      return response.json();
    }
    throw Error('Unable to load content');
  }

  async getGifById(gifId) {
    const config = {
      api_key: this.apiKey,
    };

    const response = await fetch(
      siteUrl + defaultPath + GiphyApi.formUrl(gifId, config),
      this.HttpsGetRequestSettings,
    );

    if (response.ok) return response.json();
    throw Error('Unable to load content');
  }

  static formUrl(path, config) {
    let url = path;
    if (!config) return url;

    const parametersArray = Object.entries(config);
    const parametersKeyValue = parametersArray.map((subArr) => subArr.join('='));
    url = `${url}?${parametersKeyValue.join('&')}`;
    return url;
  }
}

const apiHandler = new GiphyApi(myApiKey);
export default apiHandler;
