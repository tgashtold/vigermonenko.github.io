import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import SearchSection from '../components/SearchSection';
import BoxButton from '../components/BoxButton';
import { changeLocation } from '../container/reducer';
import { uploadPath } from '../services/webroot';


class HomePage extends React.Component {
  goToUpload = () => {
    const { dispatchChangeLocation } = this.props;
    dispatchChangeLocation(uploadPath);
  }

  render() {
    return (
      <>
        <BoxButton name="upload" onClick={this.goToUpload} />
        <SearchSection />
      </>
    );
  }
}

HomePage.propTypes = {
  dispatchChangeLocation: PropTypes.func.isRequired,
};

const mapDispatch = (dispatch) => ({
  dispatchChangeLocation: (path) => dispatch(changeLocation({ path })),
});

export default connect(null, mapDispatch)(HomePage);
