import './FindLanguage.css';
import axios from 'axios'
import React, { useState, useRef } from 'react';
import Language from './Language'

function FindLanguage() { 
  const userNameRef = useRef();
  const languages = [];
  const [response, setResponse] = useState(null);
  const [user, setUser] = useState(null)

  const handleApiSearch = async () => {
    const username = userNameRef.current.value
    setUser(username)
    await axios.get(`https://api.github.com/users/${username}/repos`)
    .then((response) => {
      const data = response.data;
      data.map((res) => {
        languages.push(res.language)
      })  
      // console.log(languages)
      setResponse(mostUsedLanguage(languages))
      // console.log(language)
      userNameRef.current.value = null
    })
    .catch((e) => {
      if(e.request.status === 404){
        setResponse("Uh oh! This user does not exist! Try again mate!")
      } else {
        console.log(e.message)
      }
    })
  }

  const mostUsedLanguage = (languageArray) => {
    const counts = {}
      let maxCount = 0
      let maxKey;
      for (let i = 0; i < languageArray.length; i++) {
        const key = languageArray[i];
        const count = (counts[key] = (counts[key] || 0) + 1);
        if (count > maxCount) {
          maxCount = count;
          maxKey = key;
        }
      }
    return maxKey
  }

 // what happens if more than one most used language?

  return (
    <div className="language">
      <h1>GitHub Search</h1>
      <div>Find out a user's favourite programming language!</div>
      <input ref={userNameRef} type="text" placeholder="Enter Username" aria-label='user-input'/>
      <button name="search" onClick={handleApiSearch}>Search</button>
      <Language user={user} response={response}/>
    </div>
  );
}

export default FindLanguage;