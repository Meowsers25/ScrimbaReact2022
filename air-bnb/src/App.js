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
            key={card.id}
            // pass object as prop
            // card={card}
            // spread operator
            {...card}
          />
    )
  })
  return(
    <div className="back">
      <Navbar />
      <Hero />
      <section className="cards-list">
        {cardElements}
      </section>
    </div>
  )
}

// took this out of component to clean up.
// putting the object (card) instead
// Check out the changes in Card.js

// img={card.coverImg} 
//             rating={card.stats.rating} 
//             reviewCount={card.stats.reviewCount} 
//             location={card.location} 
//             title={card.title} 
//             price={card.price}
//             openSpots={card.openSpots}

