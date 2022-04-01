import Header from './components/Header'
import Entry from './components/Entry'
import travelEntries from './travelEntries'


function App() {
  const travelInfo = travelEntries.map(item => {
      return(
        <Entry 
          key={item.id}
          {...item}
      />
      )
  })
  return (
    <div className="page">
      <Header />
      <section className="travel-list">
        {travelInfo}
      </section>
    </div>
  );
}

export default App;
