import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Directory from "./pages/Directory";
// import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Wrapper from "./components/Wrapper/Wrapper";
import "./App.css";
import Detail from "./pages/Detail";

function App() {
  return (
    <Router>
      <div>
        {/* <Navbar /> */}
        <Wrapper>
        <Switch>
          <Route exact path="/">
          <Directory></Directory>
          </Route>
          <Route exact path="/employees/:id">
            <Detail/>
            </Route>
          {/* <Route exact path="/directory">
          <Directory></Directory>
          </Route> */}
          </Switch>
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
