import React from 'react';

import apiHandler from '../APIs/GiphyApi';
import SearchSection from '../components/SearchSection';
import ResultSection from '../components/ResultSection';

const gifsLimit = 9;
const searchPath = '/search?q=';


const SearchPage = class extends React.Component {
  constructor(props) {
    super(props);

    this.onLoadMore = this.onLoadMore.bind(this);
    this.state = {
      search: '',
      cachedGifs: [],
      currentOffset: 0,
    };
  }

  async componentDidMount() {
    this.onRouteChange();
  }

  async componentDidUpdate(prevProps) {
    if (prevProps.location.search !== window.location.search) {
      this.onRouteChange();
    }
  }

  async onRouteChange() {
    const queryParam = new URLSearchParams(window.location.search);
    const { currentOffset } = this.state;
    const result = await apiHandler.getGifsByQuery(queryParam.get('q'), currentOffset, gifsLimit);
    if (!result) return;

    this.setState({
      cachedGifs: [...result.data],
      search: queryParam.get('q'),
    });
  }

  async onLoadMore() {
    const { currentOffset, search, cachedGifs } = this.state;
    const newOffset = currentOffset + gifsLimit;
    const result = await apiHandler.getGifsByQuery(search, newOffset, gifsLimit);
    if (result) {
      this.setState({
        cachedGifs: [...cachedGifs, ...result.data],
        currentOffset: newOffset,
      });
    }
  }

  render() {
    const queryParam = new URLSearchParams(window.location.search);
    const search = queryParam.get('q');
    const { cachedGifs } = this.state;

    return (
      <>
        <SearchSection text={search} handleSubmit={this.handleSubmit} />
        <ResultSection loadMore={this.onLoadMore} gifs={cachedGifs} from={`/search?q=${search}`} />
      </>
    );
  }
};

export default SearchPage;
