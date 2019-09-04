import React from 'react';

import apiHandler from '../APIs/GiphyApi';
import SearchSection from '../components/SearchSection';
import ResultSection from '../components/ResultSection';

const gifsLimit = 9;

class SearchPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
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
    const urlParam = new URLSearchParams(window.location.search);
    const query = urlParam.get('q');
    const count = urlParam.get('count');

    const result = await apiHandler.getGifsByQuery(query, 0, count);
    if (result) {
      this.setState({
        cachedGifs: [...result.data],
        currentOffset: count,
      });
    }
  }

  render() {
    const queryParam = new URLSearchParams(window.location.search);
    const search = queryParam.get('q');
    const { cachedGifs, currentOffset } = this.state;

    return (
      <>
        <SearchSection text={search} handleSubmit={this.handleSubmit} />
        <ResultSection
          toLoadMore={`/search?q=${search}&count=${parseInt(currentOffset, 10) + gifsLimit}`}
          gifs={cachedGifs}
          from={`/search?q=${search}&count=${currentOffset}`}
        />
      </>
    );
  }
}

export default SearchPage;
