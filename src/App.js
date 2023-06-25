import React from "react";
import "./App.css";
import { albumCollection } from "./data";
import Album from "./components/Album";

function App() {
  return (
    <div className="App">
      <h1>My Music Album Collection</h1>
      <div className="albums">
        {albumCollection.map((album) => (
          <Album album={album} />
        ))}
      </div>
    </div>
  );
}

export default App;
