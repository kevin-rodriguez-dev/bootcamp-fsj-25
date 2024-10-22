import { useState } from "react";
import KodigoMusic from "../assets/Kodigo_Music.png";

export const MusicPlayer = () => {
    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <div className="music-player">
            <div>
                <p>Ex de Verdad - <strong>HA-ASH</strong> </p>
            </div>
            <button onClick={() => setIsPlaying(!isPlaying)}>{isPlaying ? "Pausar" : "Reproducir"}</button>
        </div>
    );
};
