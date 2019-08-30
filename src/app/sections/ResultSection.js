import React from 'react';
import ResultContent from './ResultContent';
import Navigation from './Navigation';
import './resultSection.css';

class ResultSection extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className = 'results-section'>
        <ResultContent callback = {this.props.callback} gifs = { this.props.gifs }/>
        <Navigation toHome = {this.props.toHome} loadMore = {this.props.loadMore}/>
      </section>
    );
  }
}

export default ResultSection;
