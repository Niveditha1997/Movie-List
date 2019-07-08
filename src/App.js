import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import MoviesList from './MoviesList';
import './App.css';
class App extends Component {
  render() {
    return (
      <div className='App'>
        <MoviesList />
      </div>
    )
  }
}
export default App;
