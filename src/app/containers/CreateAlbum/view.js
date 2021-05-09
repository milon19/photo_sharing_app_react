import React, { useEffect, useState } from "react";

import Layout from "../Layout/index";
import AlbumForm from "../../components/forms/AlbumForm";

const CreateAlbum = () => {
  const [coverPicture, setCoverPicture] = useState("");
  const submitCreateAlbumForm = (e) => {
    console.log("🚀 ~ file: view.js ~ line 22 ~ submitCreateAlbumForm ~ e", e);

    setCoverPicture("");
  };
  const handleFileChange = (value) => {
    setCoverPicture(value);
  };

  return (
    <Layout>
      <AlbumForm
        onSubmit={submitCreateAlbumForm}
        handleFileChange={handleFileChange}
        errors={[]}
      />
    </Layout>
  );
};

export default CreateAlbum;
