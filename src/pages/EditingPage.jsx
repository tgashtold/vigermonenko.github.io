import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import EditingSection from '../components/EditingSection';
import { fetchGif, editGif, pushHistory } from '../container/reducer';
import { homePath } from '../services/webroot';


class EditingPage extends React.Component {
  componentDidMount() {
    const { match, dispatchFetch, gif } = this.props;

    if (gif.id !== match.params.id || gif.url !== '') {
      dispatchFetch(match.params.id);
    }
  }

  onSubmitChanges = (newTitle, newAuthor) => {
    const { dispatchEditGif, gif } = this.props;
    dispatchEditGif({ id: gif.id, title: newTitle, author: newAuthor });
  }

  onGoBack = () => {
    const { location, dispatchPushHistory } = this.props;
    const previousPath = location.state ? location.state.fromGif : homePath;
    dispatchPushHistory(previousPath, { ...location.state });
  }

  render() {
    const { gif } = this.props;

    return (
      <EditingSection
        gif={gif}
        onSubmit={this.onSubmitChanges}
        onGoBack={this.onGoBack}
      />
    );
  }
}

EditingPage.propTypes = {
  dispatchEditGif: PropTypes.func.isRequired,
  dispatchFetch: PropTypes.func.isRequired,
  dispatchPushHistory: PropTypes.func.isRequired,

  gif: PropTypes.shape({
    id: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,

  location: PropTypes.shape({
    state: PropTypes.shape({
      fromGif: PropTypes.string,
    }),
  }).isRequired,

  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

const mapState = ({ infoPage }) => ({
  gif: { ...infoPage.gifOriginal },
});

const mapDispatch = (dispatch) => ({
  dispatchEditGif: (gifInfo) => dispatch(editGif(gifInfo)),
  dispatchFetch: (gifId) => dispatch(fetchGif(gifId)),
  dispatchPushHistory: (path, state) => dispatch(pushHistory({ path, state })),
});


export default connect(mapState, mapDispatch)(EditingPage);
