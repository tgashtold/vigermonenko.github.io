import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import SearchSection from '../components/SearchSection';
import ResultSection from '../components/ResultSection';
import { fetchGifs } from '../container/reducer';


const gifsLimit = 9;

class SearchPage extends React.Component {
  async componentDidMount() {
    this.onRouteChange();
  }

  async componentDidUpdate(prevProps) {
    const { search } = this.props;
    if (prevProps.search !== search) {
      this.onRouteChange();
    }
  }

  async onRouteChange() {
    const { dispatchGifs, search } = this.props;
    const urlParam = new URLSearchParams(search);

    const query = urlParam.get('query');
    const count = parseInt(urlParam.get('count'), 10);
    dispatchGifs(count, query);
  }

  render() {
    const {
      gifs, count, search, pathname,
    } = this.props;
    const parameters = new URLSearchParams(search);
    parameters.set('count', count + gifsLimit);

    return (
      <>
        <SearchSection text={parameters.query} handleSubmit={this.handleSubmit} />
        <ResultSection
          toLoadMore={`${pathname}?${parameters.toString()}`}
          gifs={gifs}
          from={pathname + search}
        />
      </>
    );
  }
}


SearchPage.propTypes = {
  dispatchGifs: PropTypes.func.isRequired,

  gifs: PropTypes.arrayOf(PropTypes.shape({})).isRequired,

  count: PropTypes.number.isRequired,
  pathname: PropTypes.string.isRequired,
  search: PropTypes.string.isRequired,
};

const mapState = ({ rootReducer, router }) => ({
  gifs: [...rootReducer.searchPageReducer.gifs],
  count: rootReducer.searchPageReducer.count,

  pathname: router.location.pathname,
  search: router.location.search,
});

const mapDispatch = (dispatch) => ({
  dispatchGifs: (count, query) => dispatch(fetchGifs({ count, query })),
});

export default connect(mapState, mapDispatch)(SearchPage);
