import React from "react";

import Card from "../PhotoCard";

const CardContainer = () => {
  return (
    <div className="row row-cols-1 row-cols-md-3 mx-5">
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default CardContainer;
