import React from 'react';
import PropTypes from 'prop-types';
import MinifiedGif from './MinifiedGif';
import './resultSection.css';

class ResultContent extends React.Component {
  constructor(props) {
    super(props);

    this.getGifsArray = this.getGifComponentsArray.bind(this);
  }

  getGifComponentsArray() {
    const components = [];
    this.props.gifs.forEach((gif) => {
      components.push(<MinifiedGif callback = {this.props.callback}
         id ={gif.id} key = {gif.id} url = {gif.images.original.url}/>);
    });
    return components;
  }

  render() {
    return(
      <section className = 'search-result-content'>
        {this.getGifComponentsArray()}
      </section>
    );
  }
}

ResultContent.propTypes = {
  gifs: PropTypes.array,
}

export default ResultContent;
