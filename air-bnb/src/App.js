// import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'

//next lesson using .map(); need to import the data file(cardData.js)
import cardData from './cardData'

// export default function App(){
//   return(
//     <div className="back">
//       <Navbar />
//       <Hero />
//       <Card 
//         img="image 12.png"
//         rating={5.0}
//         reviewCount={6}
//         country="USA"
//         title="Life Lessons with Katie Zaferes"
//         price={136}/>
//     </div>
//   )
// }

export default function App(){
  const cardElements = cardData.map((card) => {
    return (
          <Card 
            img={card.coverImg} 
            rating={card.stats.rating} 
            reviewCount={card.stats.reviewCount} 
            location={card.location} 
            title={card.title} 
            price={card.price} 
          />
    )
  })
  return(
    <div className="back">
      <Navbar />
      <Hero />
      {cardElements}
    </div>
  )
}