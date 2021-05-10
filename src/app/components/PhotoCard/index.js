import React from "react";
import { Link, useHistory } from "react-router-dom";
import { BACKEND_URL } from "../../settings/config";

const Card = ({ cardInRow, album, publicAlbum }) => {
  const style = ["col-12", `col-lg-${cardInRow}`];
  const history = useHistory();
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

        {!publicAlbum ? (
          <>
            <p className="post-catagory">
              {album.is_private ? "Private" : "Public"}
            </p>{" "}
            <p
              className="post-edit"
              onClick={() => history.push(`/edit-album/${album.id}/`)}
            >
              Edit
            </p>
          </>
        ) : (
          <p className="post-author">Author: {album.author}</p>
        )}

        <div className="post-content">
          <div className="post-meta">
            <span href="#">{album.created_at}</span>
            <span href="#">{album.photos.length} Photos</span>
          </div>
          <Link
            to={publicAlbum ? `/albums/${album.id}` : `/my-albums/${album.id}`}
            className="post-title"
          >
            {album.title}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
