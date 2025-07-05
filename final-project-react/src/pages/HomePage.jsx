import axios from 'axios'
import { useEffect, useState } from 'react'

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
            <section>
                <div className="container min-vh-100">
                    <h2 className="py-3">Videogiochi</h2>
                    <div className="row mb-5 g-3">
                        {games.map(game => (
                            <div key={game.id} className="col-lg-4 col-md-6 col-sm-12">
                                {game.name}
                                <figure>
                                    <img src={`${BASE_API}/images/${game.image}`} alt='' />
                                </figure>
                                <p>{game.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )



}