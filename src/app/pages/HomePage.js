import React from 'react';
import * as sections from '../sections/index';
import apiHandler from '../APIs/GiphyApi';

const searchUrl = '/?q=';
const gifsLimit = 9;
const defaultOffset = 0;

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.onRouteChange = this.onRouteChange.bind(this);
    this.getSearchParamsFromUrl = this.getSearchParamsFromUrl.bind(this);
    this.getInitialState = this.getInitialState.bind(this);
    this.state = this.getInitialState();
  }

  componentDidMount() {
    if (this.props.location.search !== '') {
      this.onRouteChange();
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.onRouteChange();
    }
  }

  async loadMoreGifsCallback() {
    const result = await this.tryGetGifsByQuery(this.state.lastQuery, this.state.currentOffset + gifsLimit, gifsLimit);
    if (result) {
      this.setState({
        cachedGifs: [...this.state.cachedGifs, ...result.data],
      })
    }
  }

  async onRouteChange() {
    if (this.props.location.search === '') {
      this.setState({
        lastQuery: '',
        resultSectionIsShown: false,
      });
    } else {
      const params = new URLSearchParams(this.props.location.search);
      const result = await this.tryGetGifsByQuery(params.get('q'), defaultOffset, gifsLimit);
      if (!result) return;

      this.setState({
        error: null,
        cachedGifs: [...result.data],
        resultSectionIsShown: true,
        lastQuery: params.get('q'),
        offset: defaultOffset,
      })
    }
  }

  goToHomePageCallback() {
    this.props.history.push('/');
  }

  goToGifInfoPageCallback(gifId) {
    this.props.history.push({
        pathname: `/gif/${gifId}`,
        state: {
          from: this.props.location,
        }
      });
  }

  handleSubmit(text) {
    if (text === '' || text == this.state.lastQuery) return;
    this.setState({ lastQuery: text });
    const query = encodeURIComponent(text);
    this.props.history.push(searchUrl + query);
  }

  async tryGetGifsByQuery(query, offset, limit) {
    let result = null;
    try {
      result = await apiHandler.getGifsByQuery(query, offset, limit);
    } catch(error) {
      this.handleError(error);
    }
    return result;
  }

  getSearchParamsFromUrl() {
    const params = new URLSearchParams(this.props.location.search);
    return params.get('q');
  }

  getInitialState() {
    return { 
      error: null,
      resultSectionIsShown: false,
      cachedGifs: [],
      currentOffset: 0,
      lastQuery: '',
    };
  }

  render() {
    return (
      <React.Fragment>
        <sections.SearchSection text = {this.state.lastQuery} handleSubmit = { this.handleSubmit.bind(this) }/>
        { this.renderResultSectionIfNeeded.bind(this)() }
      </React.Fragment>
    );
  }

  renderResultSectionIfNeeded() {
    return this.state.resultSectionIsShown
      ? <sections.ResultSection callback = {this.goToGifInfoPageCallback.bind(this)} toHome = {this.goToHomePageCallback.bind(this)}
        gifs= {this.state.cachedGifs} loadMore = {this.loadMoreGifsCallback.bind(this)}/>
      : null;
  }

  handleError(error) {
    // here display error message to user
  }
}

export default HomePage;
