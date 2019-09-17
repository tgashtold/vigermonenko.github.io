import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import SearchSection from '../components/SearchSection';
import FixedButton from '../components/FixedButton';
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
        <FixedButton name="upload" onClick={this.goToUpload} />
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
