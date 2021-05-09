import React from "react";

import CardContainer from "../../CardContainer";

const AlbumTab = ({ user, publicAlbum }) => {
  return (
    <div
      className="tab-pane fade"
      id="profile"
      role="tabpanel"
      aria-labelledby="profile-tab"
    >
      <CardContainer
        cardInRow={6}
        albums={user.albums}
        publicAlbum={publicAlbum}
      />
    </div>
  );
};

export default AlbumTab;
