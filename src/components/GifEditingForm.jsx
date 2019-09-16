import React from 'react';
import PropTypes from 'prop-types';

import '../styles/input.css';
import Navigation from './SectionNavigation';


const gifTitlePlaceholderText = 'Enter gif title here';
const gifAuthorPlaceholderText = 'Enter your username here';

const GifEditingForm = ({ onSubmit, onGoBack }) => {
  const titleFieldRef = React.createRef();
  const authorFieldRef = React.createRef();

  const submit = (event) => {
    event.preventDefault();
    const newTitle = titleFieldRef.current.value;
    const newAuthor = authorFieldRef.current.value;
    onSubmit(newTitle, newAuthor);
  };

  return (
    <form className="form" onSubmit={submit}>
      <input
        ref={titleFieldRef}
        type="text"
        placeholder={gifTitlePlaceholderText}
        className="edit__input"
      />
      <input
        ref={authorFieldRef}
        type="text"
        placeholder={gifAuthorPlaceholderText}
        className="edit__input"
      />
      <Navigation
        leftButton={{ name: 'submit', onClick: submit }}
        rightButton={{ name: 'back', onClick: onGoBack }}
      />
    </form>
  );
};

GifEditingForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onGoBack: PropTypes.func.isRequired,
};

export default GifEditingForm;
