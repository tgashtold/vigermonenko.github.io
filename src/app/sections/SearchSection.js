import React from 'react';
import PropTypes from 'prop-types';
import './SearchSection.css';

const placeholderText = 'Type here to search all the gifs...';

class SearchSection extends React.Component {
  constructor(props) {
    super(props);

    this.handleInputEvent = this.handleInputEvent.bind(this);
    this.submit = this.submit.bind(this);
    this.state = { text: props.text };
  }

  componentDidMount() {
    this.setState({ text: this.props.text });
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.setState({
        text: this.props.text,
      })
    }
  }

  submit(event) {
    event.preventDefault();
    this.props.handleSubmit(this.state.text);
  }

  handleInputEvent(event) {
    this.setState({ text: event.target.value });
  }

  render() {
    return(
      <section className = 'search'>
      <form className = 'search__form' onSubmit = { this.submit }>
        <input className = 'search__input' type = 'text' onChange = { this.handleInputEvent }
          placeholder = { placeholderText } value = { this.state.text }></input>
        <button className = 'search__button' type = 'button' onClick = { this.submit }></button>
      </form>
    </section>
    );
  }
}

SearchSection.propTypes = {
  text: PropTypes.string,
  handleSubmit: PropTypes.func.isRequired,
}

export default SearchSection;
