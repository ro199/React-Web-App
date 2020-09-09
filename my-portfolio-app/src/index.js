import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./components/App";
import "../static/frontend/css/bootstrap.min.css";
import "../static/frontend/css/style.css";
import "../static/frontend/js/isotope.pkgd";

render(
  <Router>
    <App />
  </Router>,
  document.getElementById("app")
);
