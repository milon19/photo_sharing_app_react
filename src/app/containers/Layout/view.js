import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <NavBar header={"XYZ Photography"} />
      <main role="main" className="flex-shrink-0">
        <div style={{ marginTop: "3em" }}>{children}</div>
      </main>
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default withRouter(Layout);
