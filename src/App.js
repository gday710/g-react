import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  sayHello(name) {
    return `Hello ${name}`
    //return "string literal";
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
          Hi Adam! It's G. :)
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            I'm going to learn React.
            {this.sayHello('Gracen')}
          </a>
        </header>
      </div>
    );
  }
}

export default App;
