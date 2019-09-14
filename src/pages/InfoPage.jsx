import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import InfoSection from '../components/InfoSection';
import {
  fetchGif,
  discardGif,
  changeLocation
} from '../container/reducer';


class InfoPage extends React.Component {
  async componentDidMount() {
    const { dispatchFetch, match } = this.props;
    dispatchFetch(match.params.gifId);
  }

  componentWillUnmount() {
    const { dispatchDiscardGif } = this.props;
    dispatchDiscardGif();
  }

  getPreviousPath = () => {
    const { location } = this.props;
    return location.state
      ? location.state.from
      : '/';
  }

  onClickBack = () => {
    const { dispatchChangeLocation } = this.props;
    const previousPath = this.getPreviousPath();
    dispatchChangeLocation(previousPath, '');
  }

  render() {
    const { gif } = this.props;
    return (
      <InfoSection gif={gif} onClick={this.onClickBack} />
    );
  }
}

InfoPage.propTypes = {
  dispatchFetch: PropTypes.func.isRequired,
  dispatchDiscardGif: PropTypes.func.isRequired,
  dispatchChangeLocation: PropTypes.func.isRequired,

  gif: PropTypes.shape({}).isRequired,

  location: PropTypes.shape({
    state: PropTypes.shape({
      from: PropTypes.string,
    }),
  }).isRequired,

  match: PropTypes.shape({
    params: PropTypes.shape({
      gifId: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

const mapState = ({ infoPage, router }) => ({
  gif: infoPage.gifOriginal,

  location: router.location,
  pathname: router.location.pathname,
});

const mapDispatch = (dispatch) => ({
  dispatchFetch: (gifId) => dispatch(fetchGif(gifId)),
  dispatchDiscardGif: () => dispatch(discardGif()),
  dispatchChangeLocation: (path, queryParameters) => dispatch(changeLocation({ path, queryParameters })),
});

export default connect(mapState, mapDispatch)(InfoPage);
