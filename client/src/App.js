import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age:''
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.send = this.send.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  send(e) {
    e.preventDefault();
   
    
   /* fetch("http://localhost:4000/users",
    {
        method: "POST",
        body: data
    })
    .then(function(res){ return res.json(); })
    .then(function(data){ console.log( JSON.stringify( data ) ) })*/
    fetch('http://localhost:4000/users', {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, cors, *same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, same-origin, *omit
      headers: {
          "Content-Type": "application/json; charset=utf-8",
          // "Content-Type": "application/x-www-form-urlencoded",
      },
      redirect: "follow", // manual, *follow, error
      referrer: "no-referrer", // no-referrer, *client
      body: JSON.stringify( this.state ) // body data type must match "Content-Type" header
  })
  .then(response => response.json()) // parses response to JSON
  .catch(error => console.error(`Fetch Error =\n`, error));



  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React!!!</h1>
        </header>
        <p className="App-intro">
         <input name="name" value={this.state.name}
         onChange={this.handleInputChange}/><br/>
         <input name="age" type="number" value={this.state.age}
         onChange={this.handleInputChange}/><br/>
         <button onClick={this.send}>submit</button>
        </p>
      </div>
    );
  }
}

export default App;
