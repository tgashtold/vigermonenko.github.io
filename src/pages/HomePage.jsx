import React from 'react';

import SearchSection from '../components/SearchSection';
import ResultSection from '../components/ResultSection';

import apiHandler from '../APIs/GiphyApi';

const gifsLimit = 9;
const defaultOffset = 0;
const searchUrl = '/search?q=';

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      resultSectionIsShown: false,
      cachedGifs: [],
      currentOffset: 0,
      lastQuery: '',
    };
  }

  componentDidMount() {
    if (window.location.search !== '') {
      this.onRouteChange();
    }
  }

  componentDidUpdate(prevProps) {
    if (window.location.search !== prevProps.location.search) {
      this.onRouteChange();
    }
  }

  async onRouteChange() {
    if (window.location.search === '') {
      this.setState({
        lastQuery: '',
        resultSectionIsShown: false,
      });
    } else {
      const params = new URLSearchParams(window.location.search);
      const result = await apiHandler.getGifsByQuery(params.get('q'), defaultOffset, gifsLimit);
      if (!result) return;

      this.setState({
        cachedGifs: [...result.data],
        resultSectionIsShown: true,
        lastQuery: params.get('q'),
        currentOffset: defaultOffset,
      });
    }
  }

  handleSubmit(text) {
    this.setState({ lastQuery: text });
    const query = encodeURIComponent(text);
    this.props.history.push(searchUrl + query);
  }

  async loadMoreGifsCallback() {
    const { currentOffset, lastQuery, cachedGifs } = this.state;
    const newOffset = currentOffset + gifsLimit;

    const result = await apiHandler.getGifsByQuery(lastQuery, newOffset, gifsLimit);
    const newGifs = [...cachedGifs, ...result.data];
    if (result) {
      this.setState({
        cachedGifs: [...newGifs],
        currentOffset: newOffset,
      });
    }
  }

  renderResultSectionIfNeeded() {
    const { cachedGifs, resultSectionIsShown } = this.state;
    return resultSectionIsShown
      ? (
        <ResultSection
          gifs={cachedGifs}
          from={window.location.pathname + window.location.search}
          loadMore={() => this.loadMoreGifsCallback()}
        />
      )
      : null;
  }

  render() {
    const { lastQuery } = this.state;
    return (
      <>
        <SearchSection
          text={lastQuery}
          handleSubmit={(text) => this.handleSubmit(text)}
        />
        {this.renderResultSectionIfNeeded()}
      </>
    );
  }
}

export default HomePage;
