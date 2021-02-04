import React, { Component } from 'react';
import './App.css';
import Book from './Book/Book';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Bibliophile</h1>
        <Book/>

        
        
      </div>
    );
  }
}

export default App;
