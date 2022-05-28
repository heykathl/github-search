import './App.css';
import axios from 'axios'
import React, { useState, useRef, useEffect } from 'react';
import Language from './Language'

function App() { 
  const userNameRef = useRef()
  const [faveLanguage, setFaveLanguage] = useState([])
  const language = [];

  const handleApiSearch = async () => {
    const username = userNameRef.current.value
    await axios.get(`https://api.github.com/users/${username}/repos`)
    .then((response) => {
      const data = response.data;
      data.map((res) => {
        language.push(res.language)
      })  
      userNameRef.current.value = null
    })
    githubLanguage()
  }

  const githubLanguage = () => {
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
    // console.log(maxKey)
    setFaveLanguage(maxKey);
  }

  return (
    <>
    <h1>GitHub Search</h1>
    <input ref={userNameRef} type="text"/>
    <button onClick={handleApiSearch}>Search</button>
    <Language faveLanguage={faveLanguage}/>
    </>
  );
}

export default App;
