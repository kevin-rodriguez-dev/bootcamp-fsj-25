import { Link } from "react-router-dom";
import KodigoMusic from "../assets/Kodigo_Music.png";

export const Header = () => {
    return (
        <header>
            <img src={KodigoMusic} className="logo" alt="Kodigo Music logo" />
            <nav>
                <ul>
                    <li>
                        <Link to="/">Regístrate</Link>
                    </li>
                    <li>
                        <Link to="/discover">Inicio</Link>
                    </li>
                    <li>
                        <Link to="/playlist">Playlist</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};
