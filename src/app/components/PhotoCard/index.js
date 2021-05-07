import React from "react";
import { Link } from "react-router-dom";

const Card = ({ cardInRow }) => {
  const style = ["col-12", `col-lg-${cardInRow}`];
  return (
    <div className={style.join(" ")}>
      <div className="single-post-area">
        <p className="post-thumbnail">
          <img src="/01.jpeg" className="card-image" alt="/01.jpeg" />
        </p>

        <p className="btn post-catagory">Photography</p>

        <div className="post-content">
          <div className="post-meta">
            <span href="#">May 19, 2019</span>
            <span href="#">3 Comment</span>
          </div>
          <Link to={"/"} className="post-title">
            The Female Body Shape Men Find Most Attractive
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
