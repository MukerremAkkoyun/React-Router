import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

//stateless component
const news = () => {
  return(<h1>News page</h1>)
}

class App extends Component {
  render() {
    return (

      <Router>
        <div>
          <Route path="/" exact render={ 
            () => {

                return(<h1>Home page</h1>)
            }
          } />

          <Route path="/news"  exact strict Component={news} />
          


        </div>
      </Router>

    );
  }
}

export default App;
