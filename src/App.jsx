import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import MainLayout from './components/MainLayout';
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';
import InfoPage from './pages/InfoPage';


const App = () => (
  <MainLayout>
    <BrowserRouter>
      <Route path="/" exact component={HomePage} />
      <Route path="/search" exact component={SearchPage} />
      <Route path="/gif/:gifId" component={InfoPage} />
    </BrowserRouter>
  </MainLayout>
);

export default App;
