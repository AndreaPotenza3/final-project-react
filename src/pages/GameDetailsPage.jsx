import axios from "axios";
import { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router";

export default function GameDetails() {

    const { id } = useParams()
    const [game, setGame] = useState(null);

    function fetchGame() {
        axios.get(`http://localhost:8080/api/videogames/${id}`)
            .then(res => {
                setGame(res.data);
                console.log(res.data);
            })
            .catch(error => {
                console.error(error);
            });
    }

    useEffect(() => {
        fetchGame();
    }, [id]);

    return (
        <>
            {game ?
                <div className="container">
                    <div className="row">
                        <h1 className="text-center my-3">
                            {game.name}
                        </h1>
                        <img className="fixed-img-show" src={`http://localhost:8080/img/${game.image}`} alt={game.name} />
                        <p className="my-3">{game.description}</p>
                        <p><strong>Data di pubblicazione:</strong> {game.publicationDate}</p>
                        <h3>Piattaforme supportate</h3>
                        <ul>
                            {game.platforms.map((platform) => (
                                <li className="mx-4 p-1" key={platform.id}>{platform.name}</li>
                            ))}
                        </ul>
                    </div>
                    <NavLink className='btn btn-outline-dark' to={'/api/videogames'}>Torna alla lista</NavLink>
                </div>
                : ""}
        </>
    )
}