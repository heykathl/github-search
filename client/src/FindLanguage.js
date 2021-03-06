import './FindLanguage.css';
import axios from 'axios'
import React, { useState, useRef, useEffect } from 'react';

function FindLanguage() { 
  const userNameRef = useRef();
  const languages = [];
  const [response, setResponse] = useState(null);
  const [language, setLanguage] = useState(null);
  const [user, setUser] = useState(null)
  const [change, setChange] = useState(false)

  useEffect(() => {
    if(change){
      setResponse(user + "'s favourite programming language is " + language + "!")
    } else {
      setResponse(response)
    }
  }, [language]);

  const handleApiSearch = async () => {
    const username = userNameRef.current.value
    setUser(username)
    await axios.get(`https://api.github.com/users/${username}/repos`)
    .then((response) => {
      const data = response.data;
      data.map((res) => {
        languages.push(res.language)
      }) 
      setLanguage(countLanguage(languages))
      userNameRef.current.value = null
      setChange(true)
    })
    .catch((e) => {
      if(e.request.status === 404){
        setChange(false)
        setResponse("Uh oh! This user does not exist! Try again mate!")
      } else {
        console.log(e.message)
      }
    })
  }

  const countLanguage = (languageArray) => {
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

  return (
    <div className="language">
      <h1>GitHub Search</h1>
        <img src="https://github.githubassets.com/images/modules/logos_page/Octocat.png" alt="github-octocat-logo" width="20%" height="20%"/>
        <div>Find out a user's favourite programming language!</div>
        <br></br>
        <input ref={userNameRef} type="text" placeholder="Enter Username" aria-label='user-input'/>
        <button name="search" onClick={handleApiSearch}>Search</button>
        <h3 className="response" aria-label="response">{response}</h3>
    </div>
  );
}

export default FindLanguage;