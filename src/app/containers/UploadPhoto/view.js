import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import allActions from "../../_redux/actions";

import Layout from "../Layout/index";
import UploadPhotoForm from "../../components/forms/UploadPhotoForm";

const UploadPhoto = (props) => {
  const [photo, setPhoto] = useState("");
  const redirect = useSelector((state) => state.authReducer.redirect);
  const dispatch = useDispatch();

  const albumId = props.match.params.id;

  const submitUploadPhotoForm = (e) => {
    const formData = new FormData();
    formData.append("photo", photo);
    dispatch(allActions.albumActions.uploadPhoto(formData, albumId));
    setPhoto("");
  };

  const handleFileChange = (value) => {
    setPhoto(value);
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
      <UploadPhotoForm
        onSubmit={submitUploadPhotoForm}
        handleFileChange={handleFileChange}
        errors={[]}
      />
    </Layout>
  );
};

export default UploadPhoto;
