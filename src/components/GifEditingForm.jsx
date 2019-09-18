import React from 'react';
import PropTypes from 'prop-types';

import GifOriginalImage from './GifOriginalImage';
import TextInput from './TextInput';
import Navigation from './Navigation';


const gifTitlePlaceholderText = 'Enter gif title here';
const gifAuthorPlaceholderText = 'Enter your username here';

class GifEditingForm extends React.Component {
  submit = (event) => {
    event.preventDefault();

    const { onSubmit } = this.props;
    const { title, author } = this.state;
    if (title === '' || author === '') return;

    onSubmit(title, author);
  };

  onGifTitleChange = (text) => {
    this.setState({ title: text });
  }

  onGifAuthorChange = (text) => {
    this.setState({ author: text });
  }

  render() {
    const { gif, onGoBack } = this.props;

    return (
      <form className="form" onSubmit={this.submit}>
        <GifOriginalImage image={{ url: gif.url, title: gif.title }} />
        <TextInput onChange={this.onGifTitleChange} placeholderText={gifTitlePlaceholderText} />
        <TextInput onChange={this.onGifAuthorChange} placeholderText={gifAuthorPlaceholderText} />
        <Navigation buttons={[{ name: 'submit', onClick: this.submit }, { name: 'back', onClick: onGoBack }]} />
      </form>
    );
  }
}

GifEditingForm.defaultProps = {
  gif: {
    url: '',
    title: '',
  },
};

GifEditingForm.propTypes = {
  gif: PropTypes.shape({
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }),

  onSubmit: PropTypes.func.isRequired,
  onGoBack: PropTypes.func.isRequired,
};

export default GifEditingForm;
