import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { homePath, editingPath, gifInfoPath } from '../services/webroot';
import InfoSection from '../components/InfoSection';
import {
  fetchGif,
  discardGif,
  pushHistory,
} from '../container/reducer';


class InfoPage extends React.Component {
  async componentDidMount() {
    const { dispatchFetch, match } = this.props;
    dispatchFetch(match.params.id);
  }

  componentWillUnmount() {
    const { dispatchDiscardGif } = this.props;
    dispatchDiscardGif();
  }

  getPreviousPath = () => {
    const { location } = this.props;
    return location.state ? location.state.from : homePath;
  }

  onGoEdit = () => {
    const { dispatchPushHistory, match, location } = this.props;
    const newHistoryState = { ...location.state, fromGif: gifInfoPath + match.params.id };
    dispatchPushHistory(editingPath + match.params.id, newHistoryState);
  }

  onGoBack = () => {
    const { dispatchPushHistory } = this.props;
    const previousPath = this.getPreviousPath();
    dispatchPushHistory(previousPath);
  }

  render() {
    const { gif } = this.props;
    return (
      <InfoSection
        gif={gif}
        onGoBack={this.onGoBack}
        onGoEdit={this.onGoEdit}
      />
    );
  }
}

InfoPage.propTypes = {
  dispatchFetch: PropTypes.func.isRequired,
  dispatchDiscardGif: PropTypes.func.isRequired,
  dispatchPushHistory: PropTypes.func.isRequired,

  gif: PropTypes.shape({}).isRequired,

  location: PropTypes.shape({
    state: PropTypes.shape({
      from: PropTypes.string,
    }),
  }).isRequired,

  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

const mapState = ({ infoPage, router }) => ({
  gif: infoPage.gifOriginal,

  location: router.location,
  pathname: router.location.pathname,
});

const mapDispatch = (dispatch) => ({
  dispatchFetch: (gifId) => dispatch(fetchGif(gifId)),
  dispatchDiscardGif: () => dispatch(discardGif()),
  dispatchPushHistory: (path, state) => dispatch(pushHistory({ path, state })),
});

export default connect(mapState, mapDispatch)(InfoPage);
