import React, { Component } from 'react';
import logo from './logo.svg';
import {BrowserRouter} from 'react-router-dom'
import Routes from './routes'
import './App.css';


 
class App extends Component {
 
  render() { 
    return (
      <div>
      <BrowserRouter>
      <Routes/>
     </BrowserRouter>
      </div>
    );
  }
}
 
export default App;