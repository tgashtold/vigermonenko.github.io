import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import InfoSection from '../components/InfoSection';
import {
  fetchGif,
  discardGif,
} from '../container/reducer';


class InfoPage extends React.Component {
  async componentDidMount() {
    const { fetch, pathname } = this.props;
    const gifId = pathname.slice('/gif/'.length);
    fetch(gifId);
  }

  componentWillUnmount() {
    const { unmountGif } = this.props;
    unmountGif();
  }

  getPreviousPath() {
    const { location } = this.props;
    return location.state
      ? location.state.from
      : '/';
  }

  render() {
    const { gif } = this.props;
    return (
      <InfoSection gif={gif} previousPath={this.getPreviousPath()} />
    );
  }
}

InfoPage.propTypes = {
  fetch: PropTypes.func.isRequired,
  unmountGif: PropTypes.func.isRequired,

  gif: PropTypes.shape({
    id: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    uploadDatetime: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    authorAvatarUrl: PropTypes.string.isRequired,
  }).isRequired,

  pathname: PropTypes.string.isRequired,
  location: PropTypes.shape({
    state: PropTypes.shape({
      from: PropTypes.string,
    }),
  }).isRequired,
};

const mapState = ({ rootReducer, router }) => ({
  gif: rootReducer.infoPageReducer.gifOriginal,

  location: router.location,
  pathname: router.location.pathname,
});

const mapDispatch = (dispatch) => ({
  fetch: (gifId) => dispatch(fetchGif(gifId)),
  unmountGif: () => dispatch(discardGif()),
});

export default connect(mapState, mapDispatch)(InfoPage);
