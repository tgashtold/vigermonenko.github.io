import React from 'react';

import apiHandler from '../APIs/GiphyApi';

import InfoSection from '../components/InfoSection';


class InfoPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      gifOriginalUrl: '',
      gifProps: {},
    };
  }

  async componentDidMount() {
    const url = window.location.pathname;
    const gifId = url.slice('/gif/'.length);
    const result = await apiHandler.getGifById(gifId);
    if (result) {
      this.mountGif(result.data);
    }
  }

  getPreviousPath() {
    return this.props.location.state
      ? this.props.location.state.from
      : '/';
  }

  mountGif(gif) {
    this.setState({
      gifOriginalUrl: gif.images.original.url,
      gifProps: {
        title: gif.title,
        uploaded: gif.import_datetime,
        author: gif.username || 'unknown',
        avatarUrl: gif.user ? gif.user.avatar : '',
      },
    });
  }

  render() {
    const { gifOriginalUrl, gifProps } = this.state;
    return (
      <InfoSection
        gifOriginalUrl={gifOriginalUrl}
        avatarUrl={gifProps.avatarUrl}
        author={gifProps.author}
        title={gifProps.title}
        uploadDatetime={gifProps.uploaded}
        prevPath={this.getPreviousPath()}
      />
    );
  }
}

export default InfoPage;
