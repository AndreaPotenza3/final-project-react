import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router'
import Home from './pages/HomePage'
import GameDetails from './pages/GameDetailsPage'
import './App.css'
import GlobalContext from './Context/GlobalContext'

function App() {

  const [games, setGames] = useState(null)

  return (

    // <GlobalContext.Provider>
    <BrowserRouter>
      <Routes>
        {/* <Route element={<DefaultLayout />}> */}
        <Route path="/" element={<Home />} />
        <Route path="/api/videogames/:id" element={<GameDetails />} />
        {/* </Route> */}
      </Routes>
    </BrowserRouter>
    // </GlobalContext.Provider>
  )
}

export default App

