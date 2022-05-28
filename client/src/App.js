import './App.css';
import axios from 'axios'
import React, { useState, useRef, useEffect } from 'react';

function App() {



  const handleApiSearch = async () => {
    await axios.get(`https://api.github.com/users/heykathl/repos`)
    .then((response) => {
      console.log(response.data[0].language)
    
    })
  }

  return (
    <>
    <h1>GitHub Search</h1>
    <input type="text"/>
    <button onClick={handleApiSearch}>Search</button>
    </>
  );
}

export default App;
