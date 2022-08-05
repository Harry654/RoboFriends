import SearchBox from './components/SearchBox';
import Card from './components/Card';
import users from './components/users.json';
import './App.css';
import 'tachyons';

import React, { Component } from 'react';
class App extends Component {
  constructor(){
    super();
    this.state = {
      users: users
    }
  }
  updateSearchInput = (inputContent) => {
    // this.setState({});
    this.setState({
      users: users.filter((user) => (
        user.name.toLowerCase().includes(inputContent.toLowerCase())
      ))
    });
    console.log(this.state.users);
    console.log(inputContent.toLowerCase()); 
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