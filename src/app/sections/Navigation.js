import React from 'react';
import Button from '../../buttons/Button';
import PropTypes from 'prop-types';
import './resultSection.css';

class Navigation extends React.Component {
  render() {
    return (
      <nav className='navigation-section'>
        <Button onclick = {this.props.loadMore} buttonName='More' />
        <Button onclick = {this.props.toHome} buttonName='Home' />
      </nav>
    );
  }
}

Navigation.propTypes = {
  loadMore: PropTypes.func,
  toHome: PropTypes.func,
}

export default Navigation;
