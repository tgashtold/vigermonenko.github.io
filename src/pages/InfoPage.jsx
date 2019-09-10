import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import InfoSection from '../components/InfoSection';
import {
  fetchGif,
  discardGif,
} from '../container/actions';


class InfoPage extends React.Component {
  async componentDidMount() {
    const { fetch } = this.props;
    const gifId = window.location.pathname.slice('/gif/'.length);
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

  location: PropTypes.shape({
    state: PropTypes.shape({
      from: PropTypes.string,
    }).isRequired,
  }).isRequired,
};

const mapState = (state) => ({
  gif: state.gifOriginal,
});

const mapDispatch = (dispatch) => ({
  fetch: (gifId) => dispatch(fetchGif(gifId)),
  unmountGif: () => dispatch(discardGif()),
});

export default connect(mapState, mapDispatch)(InfoPage);
