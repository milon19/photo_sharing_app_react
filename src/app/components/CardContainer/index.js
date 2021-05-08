import React from "react";

import Card from "../PhotoCard";

const CardContainer = ({ cardInRow, albums, publicAlbum }) => {
  return (
    <div className="row row-cols-1 row-cols-md-3 mx-5">
      {albums?.length > 0
        ? albums?.map((album) => (
            <Card
              key={album.id}
              cardInRow={cardInRow}
              album={album}
              publicAlbum={publicAlbum}
            />
          ))
        : "No albums founded."}
    </div>
  );
};

export default CardContainer;
