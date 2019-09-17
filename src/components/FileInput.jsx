import React from 'react';
import PropTypes from 'prop-types';


const defaultLabelText = 'Choose file';

class FileInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({ labelText: defaultLabelText });
  }

  onFileSelected = () => {
    const { inputFieldRef } = this.props;
    const fileName = inputFieldRef.current.files[0].name;
    this.setState({ labelText: fileName });
  }

  render() {
    const { inputFieldRef } = this.props;
    const { labelText } = this.state;

    return (
      <div className="file-input">
        <label htmlFor="fileInput" className="input-file__label">
          {labelText}
          <input
            ref={inputFieldRef}
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
  inputFieldRef: PropTypes.shape({
    current: PropTypes.any,
  }).isRequired,
};

export default React.forwardRef((props, ref) => <FileInput inputFieldRef={ref} props={{ ...props }} />);
