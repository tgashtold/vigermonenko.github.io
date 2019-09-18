import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { searchPath, queryParamName, countParamName } from '../services/webroot';
import { pushHistory } from '../container/reducer';
import '../styles/searchSection.css';


const placeholderText = 'Type here to search all the gifs...';
const defaultCount = 9;

class SearchSection extends React.Component {
  constructor(props) {
    super(props);

    this.inputFieldRef = React.createRef();
  }

  componentDidMount() {
    this.initInputFieldValue();
  }

  componentDidUpdate() {
    this.initInputFieldValue();
  }

  onSubmit = (event) => {
    event.preventDefault();

    const { dispatchPushHistory } = this.props;
    const query = this.inputFieldRef.current.value;

    const urlParameters = new URLSearchParams('');
    urlParameters.set(queryParamName, query);
    urlParameters.set(countParamName, defaultCount);

    dispatchPushHistory(searchPath + urlParameters.toString());
  }

  initInputFieldValue = () => {
    const searchParameters = new URLSearchParams(window.location.search);
    const query = searchParameters.get(queryParamName);
    this.inputFieldRef.current.value = query;
  }

  render() {
    return (
      <section className="search">
        <form
          className="search__form"
          onSubmit={this.onSubmit}
        >
          <input
            ref={this.inputFieldRef}
            className="search__input"
            type="text"
            onChange={this.onChange}
            placeholder={placeholderText}
          />
          <button
            type="button"
            className="search__button"
            onClick={this.onSubmit}
            aria-label="search"
          />
        </form>
      </section>
    );
  }
}

SearchSection.propTypes = {
  dispatchPushHistory: PropTypes.func.isRequired,
};

const mapDispatch = (dispatch) => ({
  dispatchPushHistory: (path, state) => dispatch(pushHistory({ path, state })),
});

export default connect(null, mapDispatch)(SearchSection);
