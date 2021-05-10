import React from "react";
import RouteApp from "./route";
import axios from "axios";

axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";

function App() {
  return (
    <div className="App d-flex flex-column h-100">
      <RouteApp />
    </div>
  );
}

export default App;
