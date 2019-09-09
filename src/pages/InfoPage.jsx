/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';

import InfoSection from '../components/InfoSection';
import { 
  fetchGif,
  discardGif,
} from '../container/actions';


class InfoPage extends React.Component {
  async componentDidMount() {
    const { fetchGif } = this.props;
    const gifId = window.location.pathname.slice('/gif/'.length);
    fetchGif(gifId);
  }

  componentWillUnmount() {
    const { unmountGif } = this.props;
    unmountGif();
  }

  getPreviousPath() {
    const { location } = this.props;
    return location.state
      ? location.state.from
      : '/';
  }

  render() {
    const { gif } = this.props;
    return (
      <InfoSection gif={gif} previousPath={this.getPreviousPath()} />
    );
  }
}


const mapState = (state) => ({
  gif: state.gifOriginal,
});

const mapDispatch = (dispatch) => ({
  fetchGif: (gifId) => dispatch(fetchGif(gifId)),
  unmountGif: () => dispatch(discardGif()),
});

export default connect(mapState, mapDispatch)(InfoPage);
