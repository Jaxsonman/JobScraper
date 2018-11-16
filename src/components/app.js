import React, { Component } from 'react';
import Search from './Search';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
          <h1 className="header"><strong>Job</strong>Scraper</h1>
        <h4 className="desc">Use this website to search jobs on indeed and soon some others</h4>
        <Search />
      </div>
    );
  }
}
