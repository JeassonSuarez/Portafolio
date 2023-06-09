import { useState } from 'react'
import Header from './components/pure/Header'
import Contenido from './components/containers/Contenido'
import Footer from './components/pure/Footer'

function App() {

  return (
    <div className="App">
      <Header />
      <Contenido />
      <Footer />
    </div>
  )
}

export default App
