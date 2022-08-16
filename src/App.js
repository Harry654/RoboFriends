import React, { Component } from 'react';
import SearchBox from './components/SearchBox';
import Card from './components/Card';
// import users from './components/users.json';
import './App.css';
// import 'tachyons';

class App extends Component {
  constructor(){
    super();
    this.state = {
      searchUpdate: '',
      users: [],
      users2: []
    }
  }
  // users = [];
componentDidMount(){
  fetch('http://jsonplaceholder.typicode.com/users')
  .then((response) => (response.json()))
  .then((response) => {
    this.setState({users : response})
    this.setState({users2 : response})
  })
  .catch((err) => (console.log(err)))
  }

  
  updateSearchInput = (event) => {
    // this.setState();
    // filteredRobots = 
    this.setState({
      searchContent: event.target.value,
      users: this.state.users2.filter((user) => (
        user.name.toLowerCase().includes(event.target.value.toLowerCase())
      ))
    });
  }

  render(){
    return (
      <div>
        <SearchBox updateSearchInput={this.updateSearchInput} />
        <Card users={this.state.users.reverse()} />
      </div>
    );
  }
}

export default App;