import React from 'react';
import PropTypes from 'prop-types';

import FileInput from './FileInput';
import GifInfoInputs from './GifInfoInputs';


class GifUploadForm extends React.Component {
  constructor(props) {
    super(props);

    this.inputFileRef = React.createRef();
  }

  onSubmit = (title, author) => {
    const { onSubmit } = this.props;

    const file = this.inputFileRef.current.files[0];
    if (!file) return;

    onSubmit(title, author, file);
  };

  render() {
    const { onGoBack } = this.props;

    return (
      <form className="form">
        <FileInput ref={this.inputFileRef} />
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
