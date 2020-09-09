import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./common/Header";
import PageNotFound from "./PageNotFound";
import About from "./about/About";
import Certificate from "./certificate/Certificate";
import Curriculum from "./curriculum/Curriculum";
import Contact from "./contact/Contact";
import Project from "./project/Project";

function App() {
  return (
    <div id="colorlib-page">
      <div id="container-wrap">
        <Header />
        <div id="colorlib-main">
          <Switch>
            <Route exact path="/" component={About} />
            <Route path="/certificate" component={Certificate} />
            <Route path="/curriculum" component={Curriculum} />
            <Route path="/contact" component={Contact} />
            <Route path="/project" component={Project} />
            <Route component={PageNotFound} />
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
