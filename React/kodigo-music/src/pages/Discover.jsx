import KodigoMusic from "../assets/Kodigo_Music.png";

export const Discover = () => {
  const genres = ["Pop", "Rock", "Hip Hop", "Jazz", "Classical", "Electronic"];

  return (
      <div className="discover">
          <h2>Descubre tu música</h2>
          <div className="genre-list">
              {genres.map((genre, index) => (
                  <div key={index} className="genre-item">
                      <h3>{genre}</h3>
                      <img src={KodigoMusic} className="logo" alt="Kodigo Music logo" />
                      <button>Explorar {genre}</button>
                  </div>
              ))}
          </div>
      </div>
  );
};
