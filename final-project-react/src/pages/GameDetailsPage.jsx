import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router";

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
                <div>
                    <div>
                        {game.name}
                    </div>
                    <figure>
                        <img src={`http://localhost:8080/images/${game.image}`} alt={game.name} />
                    </figure>
                    <p>{game.description}</p>
                </div>
                : ""}
        </>
    )
}