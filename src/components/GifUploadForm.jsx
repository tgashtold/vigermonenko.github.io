import React from 'react';
import PropTypes from 'prop-types';

import FileInput from './FileInput';
import GifInfoInputs from './GifInfoInputs';


class GifUploadForm extends React.Component {
  onSubmit = (title, author) => {
    const { onSubmit } = this.props;
    const { file } = this.state;

    if (!file) return;

    onSubmit(title, author, file);
  };

  onFileSelected = (file) => {
    this.setState({ file });
  }

  render() {
    const { onGoBack } = this.props;

    return (
      <form className="form">
        <FileInput onFileSelected={this.onFileSelected} />
        <GifInfoInputs onGoBack={onGoBack} onSubmit={this.onSubmit} />
      </form>
    );
  }
}

GifUploadForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onGoBack: PropTypes.func.isRequired,
};

export default GifUploadForm;
