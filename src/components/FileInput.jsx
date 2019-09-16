import React from 'react';
import PropTypes from 'prop-types';

const defaultLabelText = 'Choose file';

class FileInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = ({ labelText: defaultLabelText });
  }

  onFileSelected = () => {
    const { valueRef } = this.props;
    const fileName = valueRef.current.files[0].name;
    this.setState({ labelText: fileName });
  }

  render() {
    const { valueRef } = this.props;
    const { labelText } = this.state;

    return (
      <div className="file-input">
        <label htmlFor="fileInput" className="input-file__label">
          {labelText}
          <input
            ref={valueRef}
            type="file"
            name="file"
            id="fileInput"
            className="input-file__input"
            onChange={this.onFileSelected}
          />
        </label>
      </div>
    );
  }
}

FileInput.propTypes = {
  valueRef: PropTypes.shape({
    current: PropTypes.any,
  }).isRequired,
};

export default FileInput;
