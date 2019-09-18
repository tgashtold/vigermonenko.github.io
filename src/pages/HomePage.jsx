import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import SearchSection from '../components/SearchSection';
import FixedButton from '../components/FixedButton';
import { pushHistory } from '../container/reducer';
import { uploadPath } from '../services/webroot';


class HomePage extends React.Component {
  goToUpload = () => {
    const { dispatchPushHistory } = this.props;
    dispatchPushHistory(uploadPath);
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
  dispatchPushHistory: PropTypes.func.isRequired,
};

const mapDispatch = (dispatch) => ({
  dispatchPushHistory: (path) => dispatch(pushHistory({ path })),
});

export default connect(null, mapDispatch)(HomePage);
