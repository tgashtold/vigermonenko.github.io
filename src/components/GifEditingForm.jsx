import React from 'react';

import '../styles/input.css';


const gifNamePlaceholderText = 'Enter gif title';
const usernamePlaceholderText = 'Enter your username';

const GifEditingForm = () => (
  <div className="form">
    <input type="text" placeholder={gifNamePlaceholderText} className="search__input" />
    <input type="text" placeholder={usernamePlaceholderText} className="search__input" />
  </div>
);

export default GifEditingForm;
