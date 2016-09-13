import React from 'react';
import { connect } from 'react-redux';
import configureStore from './utils/configure-store';
import DevTools from './components/DevTools';

// child app-specific components
import TotalClicks from './components/TotalClicks';
import Clickers from './components/Clickers';
import SaveAllBar from './components/SaveAllBar';
import Footer from './components/Footer';

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
        <div className="container instructions">
          <h4><strong>Instructions</strong></h4>
          <ul>
            <li>Click on boxes below. Save to update global state.</li>
            <li>Click the <code>SAVE ALL</code> button to save all unsaved changes.</li>
          </ul>
        </div>
        <TotalClicks />
        <Clickers />
        <Footer />
        <SaveAllBar />
        <DevTools key="devtools" />
      </div>
    );
  }
}

export default connect()(App);