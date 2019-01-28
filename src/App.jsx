import React, { Component } from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import { Route } from "react-router";
import Nav from "./Nav.jsx";
import Home from "./js/components/container/Home.jsx";
import About from "./js/components/container/About.jsx";
import Gallery from "./js/components/container/Gallery.jsx";
import Contact from "./js/components/container/Contact.jsx";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/About" component={About} />
            <Route path="/Gallery" component={Gallery} />
            <Route path="/Contact" component={Contact} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
