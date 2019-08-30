import React from 'react';
import PropTypes from 'prop-types';
import './resultSection.css';

class MinifiedGif extends React.Component {
  constructor(props) {
    super(props);
  }

  onclick() {
    this.props.callback(this.props.id);
  }

  render() {
    return(
      <div onClick = {this.onclick.bind(this)} className = 'minified-gif-wrapper'>
        <img className = 'minified-gif__img' src = {this.props.url}></img>
      </div>
    );
  }
}

MinifiedGif.protoTypes = {
  link: PropTypes.string.isRequired,
  callback: PropTypes.func,
}

export default MinifiedGif;
