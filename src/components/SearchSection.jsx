import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import '../styles/searchSection.css';
import { submit } from '../container/reducer';


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
    const { dispatchPush } = this.props;
    dispatchPush(defaultCount, this.inputFieldRef.current.value);
  }

  initInputFieldValue = () => {
    const searchParameters = new URLSearchParams(window.location.search);
    const query = searchParameters.get('query');
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
  dispatchPush: PropTypes.func.isRequired,
};

const mapDispatch = (dispatch) => ({
  dispatchPush: (count, query) => dispatch(submit({ count, query })),
});

export default connect(null, mapDispatch)(SearchSection);
