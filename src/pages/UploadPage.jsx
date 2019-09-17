import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import EditingSection from '../components/EditingSection';
import { UPLOAD } from '../components/GifEditingForm';
import { homePath } from '../services/webroot';
import { uploadGif, pushHistory } from '../container/reducer';

class UploadPage extends React.Component {
  onUpload = (title, author, file) => {
    const { dispatchUploadGif } = this.props;
    const gif = {
      image: file,
      title,
      author,
    };
    dispatchUploadGif(gif);
  }

  onGoBack = () => {
    const { dispatchPushHistory } = this.props;
    dispatchPushHistory(homePath);
  }

  render() {
    return (
      <EditingSection
        onSubmit={this.onUpload}
        onGoBack={this.onGoBack}
        mode={UPLOAD}
      />
    );
  }
}

UploadPage.propTypes = {
  dispatchUploadGif: PropTypes.func.isRequired,
  dispatchPushHistory: PropTypes.func.isRequired,

  location: PropTypes.shape({
    state: PropTypes.shape({
      fromGif: PropTypes.string,
    }),
  }).isRequired,
};

const mapDispatch = (dispatch) => ({
  dispatchUploadGif: (gif) => dispatch(uploadGif({ gif })),
  dispatchPushHistory: (path, state) => dispatch(pushHistory({ path, state })),
});

export default connect(null, mapDispatch)(UploadPage);
