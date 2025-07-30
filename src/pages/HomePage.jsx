import axios from 'axios'
import { useEffect, useState } from 'react'
import GameCard from '../components/GameCard'

export default function Home() {

    const BASE_API = 'http://localhost:8080'
    const [games, setGames] = useState([])
    const [search, setSearch] = useState('')

    function fetchGames(name = "") {
        axios.get(`${BASE_API}/api/videogames`, {
            params: { name: name.trim() }  // Use trim to avoid leading/trailing spaces
        })
            .then(res => {
                setGames(res.data)
            })
            .catch(error => {
                console.error(error)
            })
    }

    useEffect(() => {
        fetchGames()
    }, [])

    const handleSearch = (e) => {
        e.preventDefault()
        fetchGames(search)
    }

    return (
        <>
            <div className="container">
                <div className="row">
                    <h1 className="text-center my-3">Tutti i Videogiochi</h1>
                    <div className='d-flex justify-content-end align-items-center'>
                        <form onSubmit={handleSearch} className="d-flex">
                            <input
                                type="text"
                                className="form-control me-1"
                                placeholder="Cerca per nome..."
                                value={search}
                                onChange={e => setSearch(e.target.value)}
                            />
                            <button type="submit" className="btn btn-outline-dark">Cerca</button>
                        </form>
                    </div>
                    <div className="row mb-5 g-3">
                        {games.map(game => (
                            <div key={game.id} className="col-4">
                                <GameCard game={game} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )



}