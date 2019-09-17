import React from 'react';
import PropTypes from 'prop-types';

import GifOriginalImage from './GifOriginalImage';
import FileInput from './FileInput';
import TextInput from './TextInput';
import Navigation from './SectionNavigation';

export const EDITING = 'EDITING';
export const UPLOAD = 'UPLOAD';
const gifTitlePlaceholderText = 'Enter gif title here';
const gifAuthorPlaceholderText = 'Enter your username here';

const GifEditingForm = ({
  gif,
  onSubmit,
  onGoBack,
  mode,
}) => {
  const titleFieldRef = React.createRef();
  const authorFieldRef = React.createRef();
  const fileRef = React.createRef();

  const submit = (event) => {
    event.preventDefault();
    const newTitle = titleFieldRef.current.value;
    const newAuthor = authorFieldRef.current.value;

    if (newTitle === '' || newAuthor === '') return;

    if (mode === EDITING) {
      onSubmit(newTitle, newAuthor);
    } else {
      const file = fileRef.current.files[0];
      if (!file) return;
      onSubmit(newTitle, newAuthor, file);
    }

    titleFieldRef.current.value = '';
    authorFieldRef.current.value = '';
  };

  const RenderDependingOnMode = () => (
    mode === EDITING
      ? <GifOriginalImage image={{ url: gif.url, title: gif.title }} />
      : <FileInput valueRef={fileRef} />
  );

  return (
    <form className="form" onSubmit={submit}>
      {RenderDependingOnMode()}
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
  mode: PropTypes.oneOf([EDITING, UPLOAD]).isRequired,
  gif: PropTypes.shape({
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }),

  onSubmit: PropTypes.func.isRequired,
  onGoBack: PropTypes.func.isRequired,
};

export default GifEditingForm;
