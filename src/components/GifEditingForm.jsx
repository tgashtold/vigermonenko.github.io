import React from 'react';
import PropTypes from 'prop-types';

import GifOriginalImage from './GifOriginalImage';
import GifInfoInput from './GifInfoInput';


class GifEditingForm extends React.Component {
  submit = (title, author) => {
    const { onSubmit } = this.props;
    onSubmit(title, author);
  };

  render() {
    const { gif, onGoBack } = this.props;

    return (
      <form className="form" onSubmit={this.submit}>
        <GifOriginalImage image={{ url: gif.url, title: gif.title }} />
        <GifInfoInput onSubmit={this.onSubmit} onGoBack={onGoBack} />
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
