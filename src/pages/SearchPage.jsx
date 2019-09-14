import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { searchPath, countParamName, queryParamName } from '../services/webroot';
import SearchSection from '../components/SearchSection';
import ResultSection from '../components/ResultSection';
import { fetchGifs, changeLocation } from '../container/reducer';


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

    const query = urlParam.get(queryParamName);
    const count = parseInt(urlParam.get(countParamName), 10);
    dispatchGifs(count, query);
  }

  onLoadMoreClick = () => {
    const { count, query, dispatchChangeLocation } = this.props;
    const replace = true;
    dispatchChangeLocation(searchPath, `${queryParamName}=${query}&${countParamName}=${count + gifsLimit}`, replace);
  };

  onHomeClick = () => {
    const { dispatchChangeLocation } = this.props;
    dispatchChangeLocation('/', '');
  }

  render() {
    const {
      gifs, count, search, pathname,
    } = this.props;
    const parameters = new URLSearchParams(search);
    parameters.set('count', count + gifsLimit);

    return (
      <>
        <SearchSection text={parameters.query} />
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
  dispatchChangeLocation: PropTypes.func.isRequired,
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
  dispatchChangeLocation: (path, queryParameters, replace) => dispatch(changeLocation({
    path, queryParameters, replace,
  })),
});

export default connect(mapState, mapDispatch)(SearchPage);
