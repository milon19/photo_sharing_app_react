import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import allActions from "../../_redux/actions";

import Layout from "../Layout/index";
import AlbumForm from "../../components/forms/AlbumForm";

const CreateAlbum = (props) => {
  const [coverPicture, setCoverPicture] = useState("");
  const redirect = useSelector((state) => state.authReducer.redirect);
  const dispatch = useDispatch();

  const submitCreateAlbumForm = (e) => {
    const formData = new FormData();
    if (coverPicture) {
      formData.append("cover", coverPicture);
    }

    formData.append("title", e.title);
    formData.append("is_private", e.is_private);
    dispatch(allActions.albumActions.submitAlbumForm(formData));
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
        edit={false}
        onSubmit={submitCreateAlbumForm}
        handleFileChange={handleFileChange}
        errors={[]}
      />
    </Layout>
  );
};

export default CreateAlbum;
