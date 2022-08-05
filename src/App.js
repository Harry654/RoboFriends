import React, { Component } from 'react';
import SearchBox from './components/SearchBox';
import Card from './components/Card';
import users from './components/users.json';
import './App.css';
import 'tachyons';

class App extends Component {
  constructor(){
    super();
    this.state = {
      users: users
    }
  }
  // users = [];
  // fetch('http://jsonplaceholder.typicode.com/users')
  // .then((response) => (response.json()))
  // .then((response) => (users = response)
  // .catch((err) => (console.log(err)))
  
  updateSearchInput = (searchContent) => {
    this.setState({
      users: users.filter((user) => (
        user.name.toLowerCase().includes(searchContent.toLowerCase())
      ))
    });
  }

  render(){
    return (
      <div>
        <SearchBox updateSearchInput={this.updateSearchInput} />
        <Card users={this.state.users} />
      </div>
    );
  }
}

export default App;