import React from "react";

const AboutTab = ({ user }) => {
  return (
    <div
      className="tab-pane fade show active"
      id="home"
      role="tabpanel"
      aria-labelledby="home-tab"
    >
      <div className="row">
        <div className="col-md-6">
          <label>Username</label>
        </div>
        <div className="col-md-6">
          <p>{user.username}</p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <label>Name</label>
        </div>
        <div className="col-md-6">
          <p>{user.profile?.name}</p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <label>Email</label>
        </div>
        <div className="col-md-6">
          <p>{user.email}</p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <label>Phone</label>
        </div>
        <div className="col-md-6">
          <p>{user.profile?.phone}</p>
        </div>
      </div>
    </div>
  );
};

export default AboutTab;
