import React from 'react';
import './App.css';
import Categories from './components/Categories';
import NavBar from './components/NavBar';

function App() {
  console.log('from master')
  return (
    <>
      <NavBar />
      <Categories />
    </>
  );
}

export default App;
