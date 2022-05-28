import './App.css';
import axios from 'axios'
import React, { useState, useRef } from 'react';
import Language from './Language'

function App() { 
  const userNameRef = useRef()
  const [faveLanguage, setFaveLanguage] = useState(["Find out a user's favourite programming language!"])
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
    .catch((e) => {
      console.log(e.message);
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
    setFaveLanguage("It's " + maxKey + "!");
  }

  return (
    <div className="App">
    <h1>GitHub Search</h1>
    <input ref={userNameRef} type="text"/>
    <button onClick={handleApiSearch}>Search</button>
    <Language faveLanguage={faveLanguage}/>
    </div>
  );
}

export default App;
