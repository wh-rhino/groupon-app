import React from 'react';
import logo from './logo.png';
import './App.css';
import 'bulma';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render(){
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              <input type="text" value={this.state.value} className="input" onChange={this.handleChange} placeholder="Search" /> 
              <input className="button is-info" type="submit" value="Submit" />
            </p>
          </header>
        </form>
      </div>
    );
  }
}

export default App;
