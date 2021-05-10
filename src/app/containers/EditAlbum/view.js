import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import allActions from "../../_redux/actions";

import Layout from "../Layout/index";
import AlbumForm from "../../components/forms/AlbumForm";

const EditAlbum = (props) => {
  const [coverPicture, setCoverPicture] = useState("");
  const redirect = useSelector((state) => state.authReducer.redirect);
  const album = useSelector((state) => state.albumReducer.myAlbum);
  const dispatch = useDispatch();

  const albumId = props.match.params.id;

  useEffect(() => {
    dispatch(allActions.albumActions.fetchMyAlbum(albumId));
    // eslint-disable-next-line
  }, [albumId]);

  const submitEditAlbumForm = (e) => {
    const formData = new FormData();
    if (coverPicture) {
      formData.append("cover", coverPicture);
    }

    formData.append("title", e.title);
    formData.append("is_private", e.is_private);
    dispatch(allActions.albumActions.submitAlbumFormUpdate(formData, albumId));
    setCoverPicture("");
  };

  const handleFileChange = (value) => {
    setCoverPicture(value);
  };

  useEffect(() => {
    if (redirect) {
      props.history.push(redirect);
      dispatch(allActions.authActions.redirectUser(false));
    }
    // eslint-disable-next-line
  }, [redirect]);

  return (
    <Layout>
      <AlbumForm
        {...album}
        edit={true}
        onSubmit={submitEditAlbumForm}
        handleFileChange={handleFileChange}
        errors={[]}
      />
    </Layout>
  );
};

export default EditAlbum;
