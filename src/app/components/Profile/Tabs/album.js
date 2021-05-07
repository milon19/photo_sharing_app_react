import React from "react";

import CardContainer from "../../CardContainer";

const AlbumTab = () => {
  return (
    <div
      className="tab-pane fade"
      id="profile"
      role="tabpanel"
      aria-labelledby="profile-tab"
    >
      <CardContainer cardInRow={6} />
    </div>
  );
};

export default AlbumTab;
