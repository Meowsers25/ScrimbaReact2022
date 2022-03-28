// import React from 'react'
import Jokes from './Jokes'

export default function App(){
  return(
    <div className="container">
      <Jokes 
        setup="How did the hacker escape the police?"
        punchline="He just ransomware!"
      />
      <Jokes 
        setup="Why don't pirates travel on mountain roads?"
        punchline="Scurvy"
      />
      <Jokes 
        setup="Why do bees stay in the hive in the winter?"
        punchline="Swarm"
      />
      <Jokes 
        setup="What's the best thing about Switzerland?"
        punchline="I don't know, but the flag is a big plus!"
      />
    </div>
  )
}