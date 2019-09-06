/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';

import apiHandler from '../APIs/GiphyApi';

import InfoSection from '../components/InfoSection';
import { 
  requestGifById,
  requestGifByIdSucceeded,
  requestGifByIdFailed,
  discardGif,
} from '../container/actions';


class InfoPage extends React.Component {
  async componentDidMount() {
    const { requestGif, updateGif, raiseError } = this.props;

    const gifId = window.location.pathname.slice('/gif/'.length);
    requestGif(gifId);

    const result = await apiHandler.getGifById(gifId);
    if (result) {
      updateGif({
        id: result.data.id,
        imageUrl: result.data.images.original.url,
        title: result.data.title,
        uploadDatetime: result.data.import_datetime,
        author: result.data.username || 'unknown',
        authorAvatarUrl: result.data.user ? result.data.user.avatar : '',
      });
    } else {
      raiseError();
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
  gif: state.gifOriginal,
});

const mapDispatch = (dispatch) => ({
  requestGif: (id) => dispatch(requestGifById(id)),
  updateGif: (gif) => dispatch(requestGifByIdSucceeded(gif)),
  raiseError: () => dispatch(requestGifByIdFailed()),
  unmountGif: () => dispatch(discardGif()),
});

export default connect(mapState, mapDispatch)(InfoPage);
