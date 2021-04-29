import React from "react";

import Layout from "../Layout/index";
import SubHeader from "../../components/Jumbotron";

const Home = () => {
  return (
    <Layout>
      <SubHeader />
      <div className="row row-cols-1 row-cols-md-3 mx-5">
        <div className="col mb-4">
          <div className="card h-100">
            <img src="01.jpeg" className="card-img-top" alt="01.jpeg" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
        <div className="col mb-4">
          <div className="card h-100">
            <img src="01.jpeg" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">This is a short card.</p>
            </div>
          </div>
        </div>
        <div className="col mb-4">
          <div className="card h-100">
            <img src="01.jpeg" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content.
              </p>
            </div>
          </div>
        </div>
        <div className="col mb-4">
          <div className="card h-100">
            <img src="01.jpeg" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
