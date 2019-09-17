import React from 'react';
import PropTypes from 'prop-types';

import GifOriginalImage from './GifOriginalImage';
import TextInput from './TextInput';
import Navigation from './SectionNavigation';


const gifTitlePlaceholderText = 'Enter gif title here';
const gifAuthorPlaceholderText = 'Enter your username here';

const GifEditingForm = ({
  gif,
  onSubmit,
  onGoBack,
}) => {
  const titleFieldRef = React.createRef();
  const authorFieldRef = React.createRef();


  const submit = (event) => {
    event.preventDefault();
    const newTitle = titleFieldRef.current.value;
    const newAuthor = authorFieldRef.current.value;

    if (newTitle === '' || newAuthor === '') return;

    onSubmit(newTitle, newAuthor);
  };

  return (
    <form className="form" onSubmit={submit}>
      <GifOriginalImage image={{ url: gif.url, title: gif.title }} />
      <TextInput ref={titleFieldRef} placeholderText={gifTitlePlaceholderText} />
      <TextInput ref={authorFieldRef} placeholderText={gifAuthorPlaceholderText} />
      <Navigation
        leftButton={{ name: 'submit', onClick: submit }}
        rightButton={{ name: 'back', onClick: onGoBack }}
      />
    </form>
  );
};

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
