import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router'
import Home from './pages/HomePage'
import GameDetails from './pages/GameDetailsPage'
import './App.css'
import GlobalContext from './Context/GlobalContext'
import PlatformDetails from './pages/PlatformDetailsPage'
import DefaultLayout from './layout/DefaultLayout'


function App() {

  const [games, setGames] = useState(null)

  return (

    // <GlobalContext.Provider>
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/api/videogames/:id" element={<GameDetails />} />
          <Route path="/api/platforms/:id" element={<PlatformDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
    // </GlobalContext.Provider>
  )
}

export default App

