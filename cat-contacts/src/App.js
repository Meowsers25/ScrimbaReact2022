import React from 'react'
import Contact from './components/Contact'

export default function App(){
  return(
    <div className="contacts">
      <Contact 
        img="images/cat1.jpg"
        name="Mr Whiskerson"
        phone="(212) 555-1234"
        email="mr.whiskaz@catnap.meow"
      />
      <Contact
        img="images/cat2.jpg"
        name="Fluffykins"
        phone="(212) 555-2345"
        email="fluff@me.com"
      />
      <Contact 
        img="images/cat5.jpg"
        name="Felix"
        phone="(212) 555-4567"
        email="thecat@hotmail.com"
      />
      <Contact 
        img="images/cat4.jpg"
        name="Pumpkin"
        phone="(0800) CAT KING"
        email="pumpkin@scrimba.com"
      />
    </div>
  )
}