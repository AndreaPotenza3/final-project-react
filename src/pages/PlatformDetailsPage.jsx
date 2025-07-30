import { useParams } from 'react-router'
import axios from "axios"
import { useState, useEffect } from "react"
import GameCard from '../components/GameCard'

export default function PlatformDetails() {
    const { id } = useParams()
    const [platform, setPlatform] = useState(null)

    function fetchPlatform() {
        axios.get(`http://localhost:8080/api/platforms/${id}`)
            .then(res => {
                setPlatform(res.data)
                console.log(res.data)
            })
            .catch(error => {
                console.error(error)
            })
    }

    useEffect(() => {
        fetchPlatform()
    }, [id])

    if (!platform) {
        return <div className="text-center fs-3 mt-5">Caricamento piattaforma...</div>
    }

    return (
        <>

            <div className='container'>

                <h1 className='text-center my-5'>
                    {platform.name}
                </h1>

                <div >
                    {platform.videogames && platform.videogames.length > 0 ? (
                        platform.videogames.map(videogame => (
                            <div key={videogame.id} className="badge bg-secondary col-4"><GameCard game={videogame} /></div>
                        ))
                    ) : (
                        <div className="text-center fs-3 mt-5">Non ci sono giochi disponibili per questa piattaforma!</div>
                    )}
                </div>
            </div>

        </>
    )
}