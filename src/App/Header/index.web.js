import React, { Component } from 'react';
import logo from './logo.png';

export default class Header extends Component {
  render() {
    return (
      <header className="app-header">
        <img src={logo} className="app-logo" alt="logo" />
        <h1 className="app-title">Welcome to React</h1>
      </header>
    );
  }
}
