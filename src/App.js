import { hot } from "react-hot-loader";
import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./pages/About";
import Index from "./pages/Index";
import Navbar from "./components/Navbar";

class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <Route path='/' exact component={Index} />
        <Route path='/about/' component={About} />
      </Router>
    );
  }
}

export default hot(module)(App);
