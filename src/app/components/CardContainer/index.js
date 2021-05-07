import React from "react";

import Card from "../PhotoCard";

const CardContainer = ({ cardInRow }) => {
  return (
    <div className="row row-cols-1 row-cols-md-3 mx-5">
      <Card cardInRow={cardInRow} />
      <Card cardInRow={cardInRow} />
      <Card cardInRow={cardInRow} />
      <Card cardInRow={cardInRow} />
      <Card cardInRow={cardInRow} />
      <Card cardInRow={cardInRow} />
    </div>
  );
};

export default CardContainer;
