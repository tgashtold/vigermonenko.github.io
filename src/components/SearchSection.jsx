import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import '../styles/searchSection.css';

const placeholderText = 'Type here to search all the gifs...';

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

    const text = this.inputFieldRef.current.value;
    const searchParameters = new URLSearchParams('');
    searchParameters.append('query', text);
    searchParameters.append('count', '9');

    const { history } = this.props;
    history.push(`/search?${searchParameters.toString()}`);
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
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default withRouter(SearchSection);
