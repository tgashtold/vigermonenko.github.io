import React from 'react';
import PropTypes from 'prop-types';

import TextInput from './TextInput';
import Navigation from './Navigation';


const gifTitlePlaceholderText = 'Enter gif title here';
const gifAuthorPlaceholderText = 'Enter your username here';

class GifInfoInputs extends React.Component {
  onGifTitleChange = (text) => {
    this.setState({ title: text });
  }

  onGifAuthorChange = (text) => {
    this.setState({ author: text });
  }

  onSubmit = (event) => {
    event.preventDefault();

    const { title, author } = this.state;
    const { onSubmit } = this.props;

    if (title === '' || author === '') return;

    onSubmit(title, author);
  }

  render() {
    const { onGoBack } = this.props;

    return (
      <>
        <TextInput onChange={this.onGifTitleChange} placeholderText={gifTitlePlaceholderText} />
        <TextInput onChange={this.onGifAuthorChange} placeholderText={gifAuthorPlaceholderText} />
        <Navigation buttons={[{ name: 'submit', onClick: this.onSubmit }, { name: 'back', onClick: onGoBack }]} />
      </>
    );
  }
}

GifInfoInputs.propTypes = {
  onGoBack: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default GifInfoInputs;
