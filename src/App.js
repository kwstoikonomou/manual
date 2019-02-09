import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch, } from 'react-router-dom';

import configureStore from './store/configureStore';

import QuizPage from './pages/QuizPage/QuizPage';
import LandingPage from './pages/LandingPage/LandingPage';

import './App.css';

const store = configureStore()

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route path="/quiz" exact={true} component={QuizPage} />
            <Route path="/" component={LandingPage} />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
