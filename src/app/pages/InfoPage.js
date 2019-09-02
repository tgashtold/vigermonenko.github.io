import React from 'react';
import { InfoSection } from '../sections/index';
import apiHandler from '../APIs/GiphyApi';

class InfoPage extends React.Component {
  constructor(props) {
    super(props);

    this.tryGetGifById = this.tryGetGifById.bind(this);
    this.handleError = this.handleError.bind(this);
    this.state = {
      isLoading: true,
      gifOriginalUrl: '',
      gifProps: {},
    };
  }

  async componentDidMount() {
    const url = this.props.location.pathname;
    const gifId = url.slice('/gif/'.length);
    const result = await this.tryGetGifById(gifId);
    if (result) {
      this.mountGif(result.data);
    } else {
      this.setState({
        gifProps: {
          error: 'unable to load gif info',
        }
      })
    }
  }

  async tryGetGifById(gifId) {
    let result = null;
    try {
      result = await apiHandler.getGifById(gifId);
    } catch (error) {
      this.handleError(error);
    }
    return result;
  }

  mountGif(gif) {
    this.setState({
      gifId: gif.id,
      gifOriginalUrl: gif.images.original.url,
      gifProps: {
        Title: gif.title,
        Uploaded: gif.import_datetime,
        Author: gif.username || 'unknown',
      }
    });
  }

  goBackCallback() {
    const prevLocation = this.props.location.state.from;
    if (prevLocation) {
      this.props.history.push(prevLocation);
    } else {
      this.props.history.push('/');
    }
  }

  render() {
    return (
      <InfoSection onclick={this.goBackCallback.bind(this)}
        url={this.state.gifOriginalUrl} gifProps={this.state.gifProps} />
    );
  }

  handleError(error) {
    // TODO: add error handling
  }
}

export default InfoPage;
