import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import UriFormatter from 'query-string';

import SearchSection from '../components/SearchSection';
import ResultSection from '../components/ResultSection';
import { fetchGifs } from '../container/reducer';

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
    const { fetch } = this.props;
    const urlParam = new URLSearchParams(window.location.search);

    const query = urlParam.get('query');
    const count = parseInt(urlParam.get('count'), 10);
    fetch(count, query);
  }

  render() {
    const { gifs, count } = this.props;
    const parameters = UriFormatter.parse(window.location.search);
    parameters.count = count;

    const newParameters = { ...parameters };
    newParameters.count = parseInt(count, 10) + gifsLimit;

    return (
      <>
        <SearchSection text={parameters.query} handleSubmit={this.handleSubmit} />
        <ResultSection
          toLoadMore={`/search?${UriFormatter.stringify(newParameters)}`}
          gifs={gifs}
          from={`/search?${UriFormatter.stringify(parameters)}`}
        />
      </>
    );
  }
}


SearchPage.propTypes = {
  fetch: PropTypes.func.isRequired,

  gifs: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  })).isRequired,

  count: PropTypes.number.isRequired,

  location: PropTypes.shape({
    search: PropTypes.string,
    state: PropTypes.shape({
      from: PropTypes.string,
    }),
  }).isRequired,
};

const mapState = ({ searchPageReducer }) => ({
  gifs: [...searchPageReducer.gifs],
  count: searchPageReducer.count,
});

const mapDispatch = (dispatch) => ({
  fetch: (count, query) => dispatch(fetchGifs(count, query)),
});

export default connect(mapState, mapDispatch)(SearchPage);
