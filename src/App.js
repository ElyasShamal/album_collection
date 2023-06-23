import React from "react";
import "./App.css";
import { albumCollection } from "./data";

function App() {
  return (
    <div className="App">
      <h1>My Music Album Collection</h1>
      <div className="albums">
        <Album album={albumCollection[0]} />
        <Album album={albumCollection[1]} />
        <Album album={albumCollection[2]} />
        <Album album={albumCollection[3]} />
        <Album album={albumCollection[4]} />
        <Album album={albumCollection[5]} />
        <Album album={albumCollection[6]} />
        <Album album={albumCollection[7]} />
      </div>
    </div>
  );
}

function Album({ album }) {
  const { title, artist, year, rating, coverUrl } = album;
  return (
    <div className="album">
      <h2>Title : {title}</h2>
      <p>Artist : {artist}</p>
      <p>Year : {year}</p>
      <p>Rating : {rating}</p>
      <img src={coverUrl} alt="" />
    </div>
  );
}

export default App;
