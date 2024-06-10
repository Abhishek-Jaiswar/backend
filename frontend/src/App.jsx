import React, { useState } from 'react'

const App = () => {
  const [jokes, setJokes] = useState([])
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