/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';

import apiHandler from '../APIs/GiphyApi';

import InfoSection from '../components/InfoSection';
import { displayGifInfo, discardGif } from '../container/actions';


class InfoPage extends React.Component {
  async componentDidMount() {
    const gifId = window.location.pathname.slice('/gif/'.length);
    const result = await apiHandler.getGifById(gifId);
    const { updateGif } = this.props;

    if (result) {
      updateGif({
        originalImageUrl: result.data.images.original.url,
        title: result.data.title,
        uploadDatetime: result.data.import_datetime,
        author: result.data.username || 'unknown',
        authorAvatarUrl: result.data.user ? result.data.user.avatar : '',
      });
    }
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

const mapState = (state) => ({
  gif: state.infoSectionGif,
});

const mapDispatch = (dispatch) => ({
  updateGif: (gif) => dispatch(displayGifInfo(gif)),
  unmountGif: () => dispatch(discardGif()),
});

export default connect(mapState, mapDispatch)(InfoPage);
