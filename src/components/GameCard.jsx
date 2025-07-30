import { useContext } from "react"
import { NavLink, useNavigate } from "react-router-dom"
import GlobalContext from "../Context/GlobalContext"

export default function GameCard({ game }) {

    const { id, name, image, platforms } = game
    const { BASE_API } = useContext(GlobalContext)
    const navigate = useNavigate()

    const handleClick = () => {
        navigate(`/api/videogames/${id}`)
    }

    if (!platforms) {
        console.warn("No platforms available for this game:", name)
    }

    return (
        <div className="card h-100 p-0 bg-newdark border-0" onClick={handleClick}>
            <img className="card-img-top fixed-img" src={`${BASE_API}/images/${image}`} alt='' />
            <div className="card-body card-body-new text-white bg-opacity-75">
                <h5 className="card-title mt-auto">{name}</h5>
                <ul className="list-group list-group-horizontal flex-wrap">
                    {platforms?.map(platform => (
                        <li key={platform.id} className="list-group-item">{platform.name}</li>
                    ))}
                </ul>
                {/* <NavLink to={`/api/videogames/${game.id}`} className="btn btn-primary mt-2" >Dettaglio</NavLink> */}
            </div>
        </div>
    )

}