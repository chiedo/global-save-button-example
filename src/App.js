import React from 'react';
import { connect } from 'react-redux';
import configureStore from './utils/configure-store';
import DevTools from './components/DevTools';

// child app-specific components
import TotalClicks from './components/TotalClicks';
import Clickers from './components/Clickers';
import SaveAllBar from './components/SaveAllBar';

// assets
import logo from './assets/logo.svg';
import './assets/App.css';

// configure store
export const store = configureStore();

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React + Redux: updating internal state across many components at once</h2>
        </div>
        <p className="App-intro container">
          Click on boxes below to set local clicker state. Saving one clicker updates global state. Pressing the `SAVE ALL` button fires all clickers' `_save` methods.
        </p>
        <TotalClicks />
        <Clickers />
        <SaveAllBar />
        <DevTools key="devtools" />
      </div>
    );
  }
}

export default connect()(App);