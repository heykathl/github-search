import './App.css';
import axios from 'axios'
import React, { useState, useRef, useEffect } from 'react';

function App() {

  const handleApiSearch = async () => {
    const language = [];
    await axios.get(`https://api.github.com/users/heykathl/repos&per_page=100`)
    .then((response) => {
      const data = response.data;
      data.map((res) => {
        language.push(res.language)
      })
      // console.log(language)
    })

    const counts = {}
    let maxCount = 0
    let maxKey;
    for (let i = 0; i < language.length; i++) {
      const key = language[i];
      const count = (counts[key] = (counts[key] || 0) + 1);
      if (count > maxCount) {
        maxCount = count;
        maxKey = key;
      }
    }
    console.log(maxKey)
    return maxKey;
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
