import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import { HashRouter, Switch, Route } from 'react-router-dom';

import Header from './molecules/Header';
import Footer from './molecules/Footer';
import TopList from '@pages/TopList/TopList';

// import postsStore from './stores/postsStore';

import logo from '@img/logo.svg';

const stores = {};

const App: React.FC = () => {
  return (
    <div className="App">
      <Provider {...stores}>
        <HashRouter>
          <Header />
          <Switch>
            <Route path="/list" component="TopList" />
          </Switch>
          <Footer />
        </HashRouter>
      </Provider>
    </div>
  );
};

export default App;
