import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

import "./style.css";
import AboutTab from "./Tabs/about";
import AlbumTab from "./Tabs/album";
import { BACKEND_URL } from "../../settings/config";

const Profile = ({ user, publicProfile }) => {
  const history = useHistory();

  useEffect(() => {
    if (!user?.profile?.profile_setup) {
      history.push("/profile/setup/");
    }
  }, [user, history]);

  return (
    <div className="emp-profile">
      <div className="row">
        <div className="col-md-4">
          <div className="profile-img">
            <img src={`${BACKEND_URL}${user?.profile?.profile_pic}`} alt="" />
          </div>
        </div>
        <div className="col-md-6">
          <div className="profile-head">
            <h1>Welcome to {user.profile?.name}'s profile</h1>
            <ul className="nav nav-tabs" id="myTab" role="tablist">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  id="home-tab"
                  data-toggle="tab"
                  href="#home"
                  role="tab"
                  aria-controls="home"
                  aria-selected="true"
                >
                  About
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  id="profile-tab"
                  data-toggle="tab"
                  href="#profile"
                  role="tab"
                  aria-controls="profile"
                  aria-selected="false"
                >
                  {publicProfile ? "Albums" : "My Albums"}
                </a>
              </li>
            </ul>
          </div>
          <div className="col-12">
            <div className="tab-content profile-tab" id="myTabContent">
              <AboutTab user={user} />
              <AlbumTab user={user} publicAlbum={publicProfile} />
            </div>
          </div>
        </div>

        {!publicProfile && (
          <div className="col-md-2">
            <button
              className="profile-edit-btn"
              name="editprofile"
              value="Edit Profile"
              onClick={() => history.push("/profile/setup/")}
            >
              Edit Profile
            </button>
            <button
              className="profile-edit-btn mt-2"
              name="create-album"
              onClick={() => history.push("/create-album/")}
            >
              Create Album
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
