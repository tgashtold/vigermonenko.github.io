import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import EditingSection from '../components/EditingSection';
import { UPLOAD } from '../components/GifEditingForm';
import { homePath } from '../services/webroot';
import { changeLocation } from '../container/reducer';

class UploadPage extends React.Component {
  onUpload = (newTitle, newAuthor, file) => {
    // eslint-disable-next-line no-alert
    alert(`Title: ${newTitle}\nFile name: ${file.name}\nSize: ${file.size}`);
  }

  onGoBack = () => {
    const { dispatchChangeLocation } = this.props;
    dispatchChangeLocation(homePath);
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
  dispatchChangeLocation: PropTypes.func.isRequired,

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

const mapDispatch = (dispatch) => ({
  dispatchChangeLocation: (path, state) => dispatch(changeLocation({ path, state })),
});

export default connect(null, mapDispatch)(UploadPage);
