import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {pizza:[]};
  }

  async getPizza() {
    const response = await fetch('http://localhost:3001');
    const pizza = await response.json();
    this.setState({pizza: pizza});
  }

  componentDidMount() {
    this.getPizza();
  }

  sayHello(name) {
    return `Hello ${name}`;
    //return "string literal";
  }

  render() {
    const pizza = this.state.pizza;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
          {pizza.join(', ')}
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
