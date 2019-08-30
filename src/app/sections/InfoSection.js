import React from 'react';
import PropTypes from 'prop-types';
import GifOriginal from './GifOriginal';
import Button from '../buttons/Button';
import './infoSection.css';

class InfoSection extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <section className = 'info-section'>
        <GifOriginal url = { this.props.url } gifProps = { this.props.gifProps }/>
        <Button onclick = {this.props.onclick} buttonName = 'Back'/>
      </section>
    );
  }
}

InfoSection.propTypes = {
  goBackCallback: PropTypes.func,
};

export default  InfoSection;
