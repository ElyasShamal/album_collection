import React from "react";

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

export default Album;
