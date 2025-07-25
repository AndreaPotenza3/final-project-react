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
        <header>
            <nav className="navbar navbar-expand-lg bg-light w-100 bg-dark text-white bg-opacity-75 px-3">
                <NavLink className="nav-link plat-link" to="/api/videogames">Videogames</NavLink>
                <div className="container-fluid">
                    <ul className="navbar-nav mx-auto">
                        {platforms && platforms.map(platform => (
                            <li key={platform.id} className="nav-item mx-4">
                                <NavLink className="nav-link text-white plat-link" to={`/api/platforms/${platform.id}`}>{platform.name}</NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        </header>
    );

}