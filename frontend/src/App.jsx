import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {
  const [jokes, setJokes] = useState([])

  useEffect(() => {
    axios.get('/api/jokes')
    .then((response) => {
      setJokes(response.data)
    })
    .catch((error) => {
      console.log("Error Occured: ", error);
    })
  }, [])

  return (
    <div>
      <h1>Jokes: {jokes.length}</h1>
      {jokes.map((joke) => (
        <div key={joke.id}>
            <h1>{joke.title}</h1>
           <p>{joke.content}</p>
        </div>
      ))}
    </div>
  )
}

export default App