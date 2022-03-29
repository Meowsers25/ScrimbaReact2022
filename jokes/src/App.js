// import React from 'react'
import Jokes from './Jokes'
import jokesData from './jokesData'

export default function App(){
  const jokeElements = jokesData.map(joke => {
    return <Jokes setup={joke.setup} punchline={joke.punchline} />
  })
  return(
    <div className="container">
      {jokeElements}
    </div>
  )
}

/* Moved the jokes out to use .map() instead. The jokes are now in the jokesData.js file and stored as an array of objects. Needed to import jokesData in this file. One added issue, needed to give the array a name..... not like in the video.*/
 
/*{ <Jokes 
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
/>}*/