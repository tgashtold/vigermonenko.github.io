import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';

import MainLayout from './components/MainLayout';
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';
import InfoPage from './pages/InfoPage';
import { browserHistory } from './container/store';


const App = () => (
  <MainLayout>
    <ConnectedRouter history={browserHistory}>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/search" exact component={SearchPage} />
        <Route path="/gif/:gifId" component={InfoPage} />
      </Switch>
    </ConnectedRouter>
  </MainLayout>
);

export default App;
