import React, { Component } from 'react';
import Search from './Search';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>Find Jobs Easier</h1>
        <h2>Just Search Here</h2>
        <Search />
      </div>
    );
  }
}
