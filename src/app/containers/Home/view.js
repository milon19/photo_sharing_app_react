import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import allActions from "../../_redux/actions";

import Layout from "../Layout/index";
import SubHeader from "../../components/Jumbotron";
import CardContainer from "../../components/CardContainer";

const Home = () => {
  const dispatch = useDispatch();
  const albums = useSelector((state) => state.albumReducer.publicAlbum);

  useEffect(() => {
    dispatch(allActions.albumActions.fetchHomePageData());
    // eslint-disable-next-line
  }, []);
  return (
    <Layout>
      <SubHeader />
      <CardContainer cardInRow={4} albums={albums} publicAlbum={true} />
    </Layout>
  );
};

export default Home;
