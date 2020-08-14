import React, { Component } from "react";

export default class Home extends Component {
  render() {
    return (
      <div className="container">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-6 col-md-12  "
              style={{ fontFamily: "Comic Sans MS" }}
            >
              <h3 className="title-text">Hey</h3>
              <h1 className="title-text text-uppercase">I am Mehedi.</h1>
              <h4 className="title-text text-uppercase">
                Full stack Developer.
              </h4>
            </div>
            <div className="col-lg-6 col-md-12 banner-image">
              <img
                src="../../static/frontend/banner.png"
                alt="banner-img"
                className="img-fluid"
              />
            </div>
          </div>
        </div>

        <div className="container">
          <h2 className="section-title" style={{ fontFamily: "Comic Sans MS" }}>
            About me
          </h2>
          <div className="row about-wrapper">
            <div className="col-md-6 col-sm-12">
              <div className="about-wrapper__image">
                <img
                  className="img-fluid rounded shadow-lg"
                  height="auto"
                  width="300px"
                  src="../../static/frontend/aboutme.png"
                  alt="Profile Image"
                />
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
              <div className="about-wrapper__info">
                <p className="about-wrapper__info-text">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Excepturi neque, ipsa animi maiores repellendu
                  distinctioaperiam earum dolor voluptatum consequatur
                  blanditiis inventore debitis fuga numquam voluptate architecto
                  itaque molestiae.
                </p>
                <p className="about-wrapper__info-text">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Excepturi neque, ipsa animi maiores repellendu
                  distinctioaperiam earum dolor voluptatum consequatur
                  blanditiis inventore debitis fuga numquam voluptate architecto
                  itaque molestiae.
                </p>
              </div>
            </div>
          </div>
          <br />
          <br />
        </div>

        <div className="container">
          <div className="content-section-heading">
            <h3
              className="text-secondary mb-0"
              style={{ fontFamily: "Comic Sans MS" }}
            >
              Services
            </h3>
            <h2 className="mb-5" style={{ fontFamily: "Comic Sans MS" }}>
              What I Offer
            </h2>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6 mb-5 mb-lg-0">
              <span className=" mx-auto mb-3">
                <i className="fas fa-mobile-alt"></i>
              </span>
              <h4>
                <strong>Responsive</strong>
              </h4>
              <p className="text-faded mb-0">Looks great on any screen size!</p>
            </div>
            <div className="col-lg-3 col-md-6 mb-5 mb-lg-0">
              <span className=" mx-auto mb-3">
                <i className="fas fa-pencil-alt"></i>
              </span>
              <h4>
                <strong>Dynamic</strong>
              </h4>
              <p className="text-faded mb-0">Dynamically design website.</p>
            </div>
            <div className="col-lg-3 col-md-6 mb-5 mb-md-0">
              <span className=" mx-auto mb-3">
                <i className="far fa-thumbs-up"></i>
              </span>
              <h4>
                <strong>User driven</strong>
              </h4>
              <p className="text-faded mb-0">
                User driven fully powered website
              </p>
            </div>
            <div className="col-lg-3 col-md-6">
              <span className=" mx-auto mb-3">
                <i className="fas fa-paper-plane"></i>
              </span>
              <h4>
                <strong>Question</strong>
              </h4>
              <p className="text-faded mb-0">I mustache you a question...</p>
            </div>
          </div>
          <br /> <br />
        </div>
      </div>
    );
  }
}
