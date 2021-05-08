import React from "react";
import { Link } from "react-router-dom";
import { BACKEND_URL } from "../../settings/config";

const Card = ({ cardInRow, album }) => {
  const style = ["col-12", `col-lg-${cardInRow}`];
  return (
    <div className={style.join(" ")}>
      <div className="single-post-area">
        <p className="post-thumbnail">
          <img
            src={`${BACKEND_URL}${album.cover}`}
            className="card-image"
            alt="/01.jpeg"
          />
        </p>

        <p className="post-catagory">
          {album.is_private ? "Private" : "Public"}
        </p>
        <p className="post-edit">Edit</p>

        <div className="post-content">
          <div className="post-meta">
            <span href="#">{album.created_at}</span>
            <span href="#">{album.photos.length} Photos</span>
          </div>
          <Link to={`/albums/${album.id}`} className="post-title">
            {album.title}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
