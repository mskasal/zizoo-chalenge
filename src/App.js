import React from 'react'
import './App.scss'

import { BoatCard } from './components/BoatCard/BoatCard'
import { CardList } from './shared/components'
import boats from './mock/data/boats'

function App() {
  const clonedBoats = { ...boats }

  return (
    <div className="App">
      <div className="container">
        <CardList>
          {Object.values(clonedBoats).map(boat => (
            <BoatCard key={boat.id.toString()} boat={boat} />
          ))}
        </CardList>
      </div>
    </div>
  )
}

export default App
