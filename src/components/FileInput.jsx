import React from 'react';
import PropTypes from 'prop-types';


const defaultLabelText = 'Choose file';

class FileInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = ({ labelText: defaultLabelText });
  }

  onChange = (event) => {
    const { onFileSelected } = this.props;
    const file = event.target.files[0];

    onFileSelected(file);
    this.setState({ labelText: file.name });
  }

  render() {
    const { labelText } = this.state;

    return (
      <div className="file-input">
        <label htmlFor="fileInput" className="input-file__label">
          {labelText}
          <input
            type="file"
            name="file"
            id="fileInput"
            className="input-file__input"
            onChange={this.onChange}
          />
        </label>
      </div>
    );
  }
}

FileInput.propTypes = {
  onFileSelected: PropTypes.func.isRequired,
};

export default FileInput;
