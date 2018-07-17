import React, { Component } from 'react';
import Header from './Header';
import './index.css';

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <p className="app-intro">
          To get started, edit <code>src/App.web.js</code> and save to reload.
        </p>
      </div>
    );
  }
}
