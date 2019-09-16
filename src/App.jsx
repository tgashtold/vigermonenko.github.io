import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { browserHistory } from './container/store';

import MainLayout from './components/MainLayout';
import * as pages from './pages/index';


const App = () => (
  <MainLayout>
    <ConnectedRouter history={browserHistory}>
      <Switch>
        <Route path="/" exact component={pages.HomePage} />
        <Route path="/search" exact component={pages.SearchPage} />
        <Route path="/gif/:id" exact component={pages.InfoPage} />
        <Route path="/gif/edit/:id" component={pages.EditingPage} />
        <Route path="/upload" component={pages.EditingPage} />
      </Switch>
    </ConnectedRouter>
  </MainLayout>
);

export default App;
