import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import apiHandler from '../APIs/GiphyApi';
import SearchSection from '../components/SearchSection';
import ResultSection from '../components/ResultSection';
import { cacheGifs } from '../container/actions';

const gifsLimit = 9;

class SearchPage extends React.Component {
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
    const query = urlParam.get('query');
    const count = urlParam.get('count');
    const { updateGifs } = this.props;

    const result = await apiHandler.getGifsByQuery(query, 0, count);
    if (result) {
      updateGifs([...result.data], parseInt(count, 10), query);
    }
  }

  render() {
    const queryParam = new URLSearchParams(window.location.search);
    const search = queryParam.get('query');
    const { gifs, count } = this.props;

    return (
      <>
        <SearchSection text={search} handleSubmit={this.handleSubmit} />
        <ResultSection
          toLoadMore={`/search?query=${search}&count=${parseInt(count, 10) + gifsLimit}`}
          gifs={gifs}
          from={`/search?query=${search}&count=${count}`}
        />
      </>
    );
  }
}

SearchPage.propTypes = {
  gifs: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  })).isRequired,
  updateGifs: PropTypes.func.isRequired,
  count: PropTypes.number.isRequired,
};

const mapState = (state) => ({
  gifs: state.searchSectionGifs,
  count: state.gifsCount,
});

const mapDispatch = (dispatch) => ({
  updateGifs: (gifs, count, query) => dispatch(cacheGifs(gifs, count, query)),
});

export default connect(mapState, mapDispatch)(SearchPage);
