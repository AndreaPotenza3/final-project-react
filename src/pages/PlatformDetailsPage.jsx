import { useParams } from 'react-router'
import axios from "axios"
import { useState, useEffect } from "react"

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

    return (
        <>
            {platform ?
                <div>
                    <div>
                        {platform.name}
                    </div>
                    <div>
                        {platform.videogames.map(videogame => (
                            <div key={videogame.id} className="badge bg-secondary me-1">{videogame.name}</div>
                        ))}
                    </div>
                </div>
                : ""}
        </>
    )
}