import React from 'react';
import PropTypes from 'prop-types';

import FileInput from './FileInput';
import TextInput from './TextInput';
import Navigation from './Navigation';

const gifTitlePlaceholderText = 'Enter gif title here';
const gifAuthorPlaceholderText = 'Enter your username here';


const GifUploadForm = ({ onSubmit, onGoBack }) => {
  const fileRef = React.createRef();
  const titleFieldRef = React.createRef();
  const authorFieldRef = React.createRef();

  const submit = (event) => {
    event.preventDefault();

    const newTitle = titleFieldRef.current.value;
    const newAuthor = authorFieldRef.current.value;
    const file = fileRef.current.files[0];

    if (newTitle === '' || newAuthor === '') return;

    onSubmit(newTitle, newAuthor, file);

    titleFieldRef.current.value = '';
    authorFieldRef.current.value = '';
  };

  return (
    <form className="form" onSubmit={submit}>
      <FileInput ref={fileRef} />
      <TextInput ref={titleFieldRef} placeholderText={gifTitlePlaceholderText} />
      <TextInput ref={authorFieldRef} placeholderText={gifAuthorPlaceholderText} />
      <Navigation buttons={[{ name: 'submit', onClick: submit }, { name: 'back', onClick: onGoBack }]} />
    </form>
  );
};

GifUploadForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onGoBack: PropTypes.func.isRequired,
};

export default GifUploadForm;
