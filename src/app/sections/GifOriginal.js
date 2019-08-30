import React from 'react';
import PropTypes from 'prop-types';
import './infoSection.css';

class GifOriginal  extends React.Component {
  constructor(props) {
    super(props);
    this.createComponent = this.createComponent.bind(this);
  }

  createComponent() {
    const items = [];
    for (const [key, value] of Object.entries(this.props.gifProps)) {
      items.push(<li key = { key }>{ key }: <span>{ value }</span></li>);
    }
    return items;
  }

  render() {
    const items = this.createComponent();
    return (
      <div className = 'gif-info'>
        <div> <img className = 'gif-original__img' src = { this.props.url }/> </div>
        <ul>
          { items }
        </ul>
      </div>
    );
  }
}

GifOriginal.propTypes = {
  url: PropTypes.string,
  gifProps: PropTypes.object,
};

export default  GifOriginal;
