import React from 'react'
// just a note for github
export default function App() {
  const [contact, setContact] = React.useState({
      firstName: "John",
      lastName: "Doe",
      phone: "+1 (719) 555-1212",
      email: "itsmyrealname@example.com",
      isFavorite: false
  })
  /**
   * Challenge: Fill in the values in the markup
   * using the properties of our state object above
   * (Ignore `isFavorite` for now)
   */
  
  function toggleFavorite() {
      console.log("Toggle Favorite")
  }
  
  return (
      <main>
          <article className="card">
              <img src="./images/user.png" className="card--image" alt="user"/>
              <div className="card--info">
                  <img 
                      src={`../images/emptyStar.png`} 
                      className="card--favorite"
                      onClick={toggleFavorite} alt="star"
                  />
                  <h2 className="card--name">
                      John Doe
                  </h2>
                  <p className="card--contact">+1 (719) 555-1212</p>
                  <p className="card--contact">itsmyrealname@example.com</p>
              </div>
              
          </article>
      </main>
  )
}


