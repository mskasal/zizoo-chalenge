import React from 'react'
import './App.css'

import { BoatCard, CardList } from './components'

import boats from './data/boats'

function App() {
  return (
    <div className="App">
      <div className="container">
        <CardList>
          {Object.values(boats).map(({ id, ...rest }) => (
            <BoatCard key={id} board={rest} />
          ))}
        </CardList>
      </div>
    </div>
  )
}

export default App
