import React from 'react';
import * as backgroundImage from './background.jpg';
import './Layouts.css';

class MainLayout extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className = 'site-wrapper'>
        <div className = 'background-wrapper'>
          <img className = 'background__img' src = {backgroundImage}></img>
        </div>

        <div className = 'sections'>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default MainLayout;
