import axios from 'axios'
import { useEffect, useState } from 'react'
import GameCard from '../components/GameCard'

export default function Home() {

    const BASE_API = 'http://localhost:8080'
    const [games, setGames] = useState([])

    function fetchGames() {
        axios.get(`${BASE_API}/api/videogames`)
            .then(res => {
                setGames(res.data)
                console.log(res.data)
            })
            .catch(error => {
                console.error(error)
            })
    }

    useEffect(() => {
        fetchGames()
    }, [])

    return (
        <>
            <div className="container">
                <div className="row">
                    <h1 className="text-center my-3">Tutti i Videogiochi</h1>
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