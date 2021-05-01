import React from "react";

import Layout from "../Layout/index";
import SubHeader from "../../components/Jumbotron";
import CardContainer from "../../components/CardContainer";

const Home = () => {
  return (
    <Layout>
      <SubHeader />
      <CardContainer />
    </Layout>
  );
};

export default Home;
