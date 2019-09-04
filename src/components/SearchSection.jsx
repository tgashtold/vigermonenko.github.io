import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import '../styles/searchSection.css';

const placeholderText = 'Type here to search all the gifs...';

const SearchSection = class extends React.Component {
  constructor(props) {
    super(props);

    this.state = { text: props.text };
  }

  componentDidMount() {
    const { text } = this.props;
    this.setState({ text });
  }

  onSubmit = (event) => {
    const { text } = this.state;
    event.preventDefault();
    this.props.history.push(`/search?q=${text}&count=9`);
  }

  onChange = (event) => {
    this.setState({ text: event.target.value });
  }

  render() {
    const { text } = this.state;

    return (
      <section className="search">
        <form
          className="search__form"
          onSubmit={this.onSubmit}
        >
          <input
            className="search__input"
            type="text"
            onChange={this.onChange}
            placeholder={placeholderText}
            value={text}
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
};

SearchSection.defaultProps = {
  text: '',
};

SearchSection.propTypes = {
  text: PropTypes.string,
};

export default withRouter(SearchSection);
