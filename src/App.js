import React, { useState } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/About";
import LoadingBar from "react-top-loading-bar";

const App = () => {
  const apikey = process.env.REACT_APP_MY_API;
  const [progress, setprogress] = useState(0);

  return (
    <div>
      <Router>
        <Navbar />
        <LoadingBar height={3} color="#f11946" progress={progress} />
        <Switch>
          <Route exact path="/">
            <News setprogress={setprogress} apikey={apikey} key="general" pagesize={9} country="in" category="general" />
          </Route>
          <Route exact path="/business">
            <News setprogress={setprogress} apikey={apikey} key="business" pagesize={9} country="in" category="business" />
          </Route>
          <Route exact path="/entertainment">
            <News setprogress={setprogress} apikey={apikey} key="entertainment" pagesize={9} country="in" category="entertainment" />
          </Route>
          <Route exact path="/general">
            <News setprogress={setprogress} apikey={apikey} key="general" pagesize={9} country="in" category="general" />
          </Route>
          <Route exact path="/health">
            <News setprogress={setprogress} apikey={apikey} key="health" pagesize={9} country="in" category="health" />
          </Route>
          <Route exact path="/science">
            <News setprogress={setprogress} apikey={apikey} key="science" pagesize={9} country="in" category="science" />
          </Route>
          <Route exact path="/sports">
            <News setprogress={setprogress} apikey={apikey} key="sports" pagesize={9} country="in" category="sports" />
          </Route>
          <Route exact path="/technology">
            <News setprogress={setprogress} apikey={apikey} key="technology" pagesize={9} country="in" category="technology" />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          {/* <Route path="/" element = {<News setprogress={setprogress} apikey={apikey}  pagesize={9} country="in" category="general"/>}/> */}
        </Switch>
      </Router>
    </div>
  );
};
export default App;
