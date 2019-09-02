import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import * as pages from './pages/index';


class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <MainLayout>
        <BrowserRouter>
          <Route path='/'exact  component = {pages.HomePage}></Route>
          <Route path ='/search?q=:query' component = {pages.HomePage}></Route>
          <Route path = '/gif/:gifId' component = {pages.InfoPage}></Route>
        </BrowserRouter>
      </MainLayout>
    );
  }
}

export default App;
