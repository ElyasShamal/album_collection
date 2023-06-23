import React from "react";
import "./App.css";
import { albumCollection } from "./data";

function App() {
  return (
    <div className="App">
      <h1>My Music Album Collection</h1>
      <div className="albums">
        <Album
          title={albumCollection[0].title}
          artist={albumCollection[0].artist}
          year={albumCollection[0].year}
          rating={albumCollection[0].rating}
          coverUrl={albumCollection[0].coverUrl}
        />

        <Album
          title={albumCollection[1].title}
          artist={albumCollection[1].artist}
          year={albumCollection[1].year}
          rating={albumCollection[1].rating}
          coverUrl={albumCollection[1].coverUrl}
        />

        <Album
          title={albumCollection[2].title}
          artist={albumCollection[2].artist}
          year={albumCollection[2].year}
          rating={albumCollection[2].rating}
          coverUrl={albumCollection[2].coverUrl}
        />

        <Album
          title={albumCollection[3].title}
          artist={albumCollection[3].artist}
          year={albumCollection[3].year}
          rating={albumCollection[3].rating}
          coverUrl={albumCollection[3].coverUrl}
        />

        <Album
          title={albumCollection[4].title}
          artist={albumCollection[4].artist}
          year={albumCollection[4].year}
          rating={albumCollection[4].rating}
          coverUrl={albumCollection[4].coverUrl}
        />

        <Album
          title={albumCollection[5].title}
          artist={albumCollection[5].artist}
          year={albumCollection[5].year}
          rating={albumCollection[5].rating}
          coverUrl={albumCollection[5].coverUrl}
        />
        <Album
          title={albumCollection[6].title}
          artist={albumCollection[6].artist}
          year={albumCollection[6].year}
          rating={albumCollection[6].rating}
          coverUrl={albumCollection[6].coverUrl}
        />
        <Album
          title={albumCollection[7].title}
          artist={albumCollection[7].artist}
          year={albumCollection[7].year}
          rating={albumCollection[7].rating}
          coverUrl={albumCollection[7].coverUrl}
        />
      </div>
    </div>
  );
}

function Album(props) {
  const { title, artist, year, rating, coverUrl } = props;
  return (
    <div className="album">
      <h2>{title}</h2>
      <p>{artist}</p>
      <p>{year}</p>
      <p>{rating}</p>
      <img src={coverUrl} alt="" />
    </div>
  );
}

export default App;
