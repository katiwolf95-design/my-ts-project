import { useState } from 'react'
import './App.css'
import Contexts from './Contexts'

import { BrowserRouter, Routes, Route } from "react-router-dom"
import AuthenticationView from './components/AuthenticationView'
import NavBar from './components/NavBar'

import ItunesSearch from './components/ItunesSearch.js'

function Home() {
  const [count, setCount] = useState(0)

  return (
    <div className='card'>
      <button onClick={() => setCount(c => c + 1)}>
        count is {count}
      </button>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<AuthenticationView />} />
      </Routes>

      <Contexts />
      <ItunesSearch />
    </BrowserRouter>
  )
}

export default App
