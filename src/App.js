import React, { useState, useEffect } from 'react';
// import { Routes, Route, Link } from 'react-router-dom';
import CardList from './components/CardList';
import ErrorHandler from './components/ErrorHandler';
import './App.css';
// import 'tachyons';

function App () {
  const [searchContent, setSearchContent] = useState('');
  const [users, setUsers] = useState([]);
  const [users2, setUsers2] = useState([]);
  const [loading, setLoading] = useState(true);
  const [connected, setConnected] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
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
    setSearchContent(event.target.value);
    setUsers(
      users2.filter((user) => (
        user.name.toLowerCase().includes(event.target.value.toLowerCase())
      ))
    );
  }

  return (
    <div>
      <ErrorHandler>
        <CardList users={users} loading={loading} connected={connected} updateSearchInput={updateSearchInput} searchContent={searchContent} />
      </ErrorHandler>
    </div>
  );
}

export default App;
