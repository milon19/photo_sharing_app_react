import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import allActions from "../../_redux/actions";
import { BACKEND_URL } from "../../settings/config";

import Layout from "../Layout/index";

const MyAlbumDetails = (props) => {
  const dispatch = useDispatch();
  const album = useSelector((state) => state.albumReducer.myAlbum);
  const message = useSelector((state) => state.authReducer.message);
  const redirect = useSelector((state) => state.authReducer.redirect);

  const albumId = props.match.params.id;

  useEffect(() => {
    dispatch(allActions.albumActions.fetchMyAlbum(albumId));
    // eslint-disable-next-line
  }, [albumId]);

  useEffect(() => {
    if (redirect) {
      props.history.push("/profile/");
      dispatch(allActions.authActions.redirectUser(false));
    }
    // eslint-disable-next-line
  }, [redirect]);

  const handleAlbumDelete = (id) => {
    dispatch(allActions.albumActions.deleteAlbum(id));
  };

  return (
    <Layout>
      <div class="container pt-2">
        {message ? (
          <h1 class="font-weight-light text-center text-lg-left mt-4 mb-0">
            {message}
          </h1>
        ) : (
          <>
            <h1 class="font-weight-light text-center text-lg-left mt-4 mb-0">
              {album?.title}
            </h1>
            <div>
              <button
                className="btn btn-sm btn-primary m-1"
                name="uplaod-photo"
                onClick={() => props.history.push(`/upload-photo/${album.id}`)}
              >
                Upload a Photo
              </button>
              <button
                className="btn btn-sm btn-success m-1"
                name="edit-album"
                onClick={() => props.history.push(`/edit-album/${album.id}`)}
              >
                Edit Album
              </button>
              <button
                className="btn btn-sm btn-danger m-1"
                name="delete-album"
                onClick={() => handleAlbumDelete(album.id)}
              >
                Delete Album
              </button>
            </div>
            <hr class="mt-2 mb-5" />

            <div class="row text-center text-lg-left">
              {album?.photos?.map((photo) => (
                <div key={photo.id} class="col-lg-3 col-md-4 col-6">
                  <a href="#top" class="d-block mb-4 h-100">
                    <img
                      class="img-fluid img-thumbnail"
                      src={`${BACKEND_URL}${photo.photo}`}
                      alt="album"
                    />
                  </a>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </Layout>
  );
};

export default MyAlbumDetails;
