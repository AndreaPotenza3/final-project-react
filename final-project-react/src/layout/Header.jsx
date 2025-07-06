import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export default function Header() {

    const [platforms, setPlatforms] = useState(null);

    function fetchPlatforms() {
        axios.get("http://localhost:8080/api/platforms")
            .then(res => {
                setPlatforms(res.data);
                console.log(res.data);
            })
            .catch(error => {
                console.error(error);
            });
    }

    useEffect(() => {
        fetchPlatforms();
    }, []);

    return (
        <header className="bg-dark text-white">

            <ul className="navbar-nav ms-auto">
                {platforms.map(platform => (
                    <li key={platform.id} className="nav-item">
                        <NavLink to={`/api/platforms/${platform.id}`}>{platform.name}</NavLink>
                    </li>
                ))}
            </ul>
        </header>
    );

}