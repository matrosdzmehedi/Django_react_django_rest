import React, { Fragment, Component } from "react";
import ReactDom from "react-dom";
import Navbar from "./Navbar";
import { BrowserRouter } from "react-router-dom";
import Footer from "./Footer";
class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Navbar />
        </BrowserRouter>

        <div className="container"></div>
        <Footer />
      </>
    );
  }
}

ReactDom.render(<App />, document.getElementById("app"));
