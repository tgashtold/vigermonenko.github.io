import React from 'react';
import PropTypes from 'prop-types';

import FileInput from './FileInput';
import TextInput from './TextInput';
import Navigation from './Navigation';

const gifTitlePlaceholderText = 'Enter gif title here';
const gifAuthorPlaceholderText = 'Enter your username here';


class GifUploadForm extends React.Component {
  constructor(props) {
    super(props);

    this.inputFileRef = React.createRef();
  }

  submit = (event) => {
    event.preventDefault();

    const { title, author } = this.state;
    const { onSubmit } = this.props;
    const file = this.inputFileRef.current.files[0];

    if (title === '' || author === '' || !file) return;

    onSubmit(title, author, file);
  };

  onGifTitleChange = (text) => {
    this.setState({ title: text });
  }

  onGifAuthorChange = (text) => {
    this.setState({ author: text });
  }

  render() {
    const { onGoBack } = this.props;

    return (
      <form className="form" onSubmit={this.submit}>
        <FileInput ref={this.inputFileRef} />
        <TextInput onChange={this.onGifTitleChange} placeholderText={gifTitlePlaceholderText} />
        <TextInput onChange={this.onGifAuthorChange} placeholderText={gifAuthorPlaceholderText} />
        <Navigation buttons={[{ name: 'submit', onClick: this.submit }, { name: 'back', onClick: onGoBack }]} />
      </form>
    );
  }
}

GifUploadForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onGoBack: PropTypes.func.isRequired,
};

export default GifUploadForm;
