import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { searchPath, countParamName, queryParamName, homePath } from '../services/webroot';
import SearchSection from '../components/SearchSection';
import ResultSection from '../components/ResultSection';
import { fetchGifs, replaceHistory, pushHistory } from '../container/reducer';


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
    const urlParameter = new URLSearchParams(search);

    const count = parseInt(urlParameter.get(countParamName), 10);
    const query = urlParameter.get(queryParamName);

    dispatchGifs(count, query);
  }

  onLoadMoreClick = () => {
    const { count, query, dispatchReplaceHistory } = this.props;

    const urlParameters = new URLSearchParams('');
    urlParameters.set(queryParamName, query);
    urlParameters.set(countParamName, count + gifsLimit);

    dispatchReplaceHistory(searchPath + urlParameters.toString());
  };

  onHomeClick = () => {
    const { dispatchPushHistory } = this.props;
    dispatchPushHistory(homePath);
  }

  render() {
    const {
      gifs, search, query, pathname,
    } = this.props;

    return (
      <>
        <SearchSection text={query} />
        <ResultSection
          gifs={gifs}
          from={pathname + search}
          leftButton={{ name: 'more', onClick: this.onLoadMoreClick }}
          rightButton={{ name: 'home', onClick: this.onHomeClick }}
        />
      </>
    );
  }
}


SearchPage.propTypes = {
  gifs: PropTypes.arrayOf(PropTypes.shape({})).isRequired,

  count: PropTypes.number.isRequired,
  query: PropTypes.string.isRequired,

  pathname: PropTypes.string.isRequired,
  search: PropTypes.string.isRequired,

  dispatchGifs: PropTypes.func.isRequired,
  dispatchPushHistory: PropTypes.func.isRequired,
  dispatchReplaceHistory: PropTypes.func.isRequired,
};

const mapState = ({ searchPage, router }) => ({
  gifs: [...searchPage.gifs],
  count: searchPage.count,
  query: searchPage.query,

  pathname: router.location.pathname,
  search: router.location.search,
});

const mapDispatch = (dispatch) => ({
  dispatchGifs: (count, query) => dispatch(fetchGifs({ count, query })),
  dispatchPushHistory: (path, state) => dispatch(pushHistory({ path, state })),
  dispatchReplaceHistory: (path, state) => dispatch(replaceHistory({ path, state })),
});

export default connect(mapState, mapDispatch)(SearchPage);
