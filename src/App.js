import React, { useState, useEffect } from 'react';
import SearchBox from './components/SearchBox';
import Card from './components/Card';
import users from './components/users.json';
import './App.css';
// import 'tachyons';

function App () {
  const [searchContent, setSearchContent] = useState('');
  const [users, setUsers] = useState([]);
  const [users2, setUsers2] = useState([]);
  const [loading, setLoading] = useState(true);
  const [connected, setConnected] = useState(true);

  useEffect(() => {
    fetch('http://jsonplaceholder.typicode.com/users')
    .then((response) => (response.json()))
    .then((response) => {
      setUsers(response);
      setUsers2(response);
      // console.log(response);
    })
    .catch((err) => {
      console.log(err);
      setConnected(false);
    })
    .finally(() => (setLoading(false)))
  
    }, []);

  
  const updateSearchInput = (event) => {
    // this.setState();
    // filteredRobots = 
    setSearchContent(event.target.value);
    setUsers(
      users2.filter((user) => (
        user.name.toLowerCase().includes(event.target.value.toLowerCase())
      ))
    );
    // this.setState({
    //   users: this.state.
    // });
  }

  return (
    <div>
      <SearchBox updateSearchInput={updateSearchInput} searchContent={searchContent} />
      <Card users={users} loading={loading} connected={connected} />
    </div>
  );
}

export default App;