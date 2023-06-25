import React, { useState } from "react";
import Player from "./Player";
import { starRating } from "../utility";

function Album({ album }) {
  const { title, artist, year, rating, coverUrl, spotifyId } = album;

  const [showPlayer, setShowPlayer] = useState(false);

  function handleClick() {
    setShowPlayer((showPlayer) => !showPlayer);
  }

  return (
    <div className="album">
      <h2>Title : {title}</h2>
      <p>Artist : {artist}</p>
      <p>Year : {year}</p>
      <p>Rating : {starRating(rating)}</p>

      {showPlayer ? (
        <div className="player">
          <Player spotifyId={spotifyId} />
          <button onClick={handleClick}>Close</button>
        </div>
      ) : (
        <img
          src={coverUrl}
          alt={`Album cover for ${title}`}
          onClick={handleClick}
        />
      )}
    </div>
  );
}

export default Album;
