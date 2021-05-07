import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import auth from "../../settings/auth";
import allActions from "../../_redux/actions";

import Layout from "../Layout/index";
import Profile from "../../components/Profile";
import ProfileForm from "../../components/forms/ProfileForm";

const UserProfile = (props) => {
  const user = useSelector((state) => state.authReducer.user);
  const type = props.match.params.type;
  const history = useHistory();
  const [profilePicture, setProfilePicture] = useState("");
  const profile = auth.getUserInfo()?.profile;
  const redirect = useSelector((state) => state.authReducer.redirect);
  const dispatch = useDispatch();

  const profileUpdate = (e) => {
    const formData = new FormData();

    if (profilePicture) {
      formData.append("profile_pic", profilePicture);
    }

    formData.append("name", e.name);
    formData.append("phone", e.phone);
    formData.append("profile_setup", true);

    dispatch(allActions.authActions.updateUser(formData));
    setProfilePicture("");
  };

  const handleFileChange = (value) => {
    setProfilePicture(value);
  };

  let profileComponent;
  if (type === "setup") {
    profileComponent = (
      <ProfileForm
        {...profile}
        onSubmit={profileUpdate}
        handleFileChange={handleFileChange}
        errors={[]}
      />
    );
  } else {
    profileComponent = <Profile user={user} publicProfile={false} />;
  }

  useEffect(() => {
    if (!user?.profile?.profile_setup) {
      history.push("/profile/setup/");
    }
  }, [user, history]);

  useEffect(() => {
    if (redirect) {
      props.history.push("/profile/");
      dispatch(allActions.authActions.redirectUser(false));
    }
    // eslint-disable-next-line
  }, [redirect]);

  return <Layout>{profileComponent}</Layout>;
};

export default UserProfile;
