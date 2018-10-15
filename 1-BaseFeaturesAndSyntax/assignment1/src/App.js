import React, { Component } from 'react';
import './App.css';
import UserInput from './User/UserInput';
import UserOutput from './User/UserOutput';


class App extends Component {

  state = {
    username: [
      {name: 'Prash'}
    ]
  }

  usernameChangedHandler = (event) => {
    this.setState({username: [
      {name: event.target.value}
    ]})
  }
  render() {

    const style = {
      width: '1000px',
      margin: 'auto',
      textAlign: 'center',
      backgroundColor: 'white',
      font: 'inherit',
      border: '2px solid blue',
      padding: '8px',
    };

    return (
      <div className="App">
      <h1 style={style}>This is the First assignment</h1>

        <UserInput
          name={this.state.username[0].name}
          changed={this.usernameChangedHandler}
        />

        <UserOutput
          name = {this.state.username[0].name}
          
        />

        <UserOutput
        name = {this.state.username[0].name}
        />

      </div>
    );
  }
}

export default App;
