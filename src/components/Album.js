import React from "react";
import Player from "./Player";
import { starRating } from "../utility";

function Album({ album }) {
  const { title, artist, year, rating, coverUrl, spotifyId } = album;
  return (
    <div className="album">
      <h2>Title : {title}</h2>
      <p>Artist : {artist}</p>
      <p>Year : {year}</p>
      <p>Rating : {starRating(rating)}</p>
      <img src={coverUrl} alt="" />
      <Player spotifyId={spotifyId} />
    </div>
  );
}

export default Album;
