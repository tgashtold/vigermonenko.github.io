/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import PropTypes from 'prop-types';

import '../styles/searchSection.css';

const placeholderText = 'Type here to search all the gifs...';

const SearchSection = class extends React.Component {
  constructor(props) {
    super(props);

    this.state = { text: props.text };
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.setState({
        text: this.props.text,
      });
    }
  }

  handleInputEvent(event) {
    this.setState({ text: event.target.value });
  }

  onSubmit(event) {
    event.preventDefault();
    const { handleSubmit } = this.props;
    const { text } = this.state;
    handleSubmit(text);
  }

  render() {
    const { text } = this.state;

    return (
      <section className="search">
        <form
          className="search__form"
          onSubmit={(event) => this.onSubmit(event)}
        >
          <input
            className="search__input"
            type="text"
            onChange={(event) => this.handleInputEvent(event)}
            placeholder={placeholderText}
            value={text}
          />
          <button
            type="button"
            className="search__button"
            onClick={(event) => this.onSubmit(event)}
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
  handleSubmit: PropTypes.func.isRequired,
};

export default SearchSection;
