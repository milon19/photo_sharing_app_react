import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import allActions from "../../_redux/actions";
import { BACKEND_URL } from "../../settings/config";

import Layout from "../Layout/index";

const AlbumDetails = (props) => {
  const dispatch = useDispatch();

  const album = useSelector((state) => state.albumReducer.albumDetails);
  const message = useSelector((state) => state.authReducer.message);
  const album_id = props.match.params.id;

  useEffect(() => {
    dispatch(allActions.albumActions.fetchAlbumDetails(album_id));
    // eslint-disable-next-line
  }, [album_id]);

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

export default AlbumDetails;
