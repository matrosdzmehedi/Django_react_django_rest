import React, { Component } from "react";

export default class Portfolio extends Component {
  render() {
    return (
      <div class="container">
        <br />
        <div class="row">
          <div class="col-md-3">
            <div class="card card-body h-100  border-info">
              <img
                style={{
                  width: "160px",
                  height: "200px",
                  borderRadius: "50%",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
                className="img-fluid"
                src="../../static/frontend/mecv.jpg"
                alt="me.jpg"
              />
              <hr />
              <h4>Hi I'm Mehedi!</h4>
              <p>I love coding, doing research and collaborating</p>
            </div>
          </div>

          <div class="col-md-9">
            <div class="card card-body h-100  border-info">
              <h4>My First Job as a Developer</h4>
              <hr />
              <p> Trying to Find One!! </p>
              <p> Currently working on own Projects.</p>
            </div>
          </div>
        </div>
        <br />
        <div class="row">
          <div class="col-md-6">
            <div class="card card-body h-100">
              <h5>My Experience as a Developer</h5>
              <hr />
              <p>Started to learning and building things.</p>
              <p>
                Look forward to find a exciting workplace to grow-up my
                developing skills.
              </p>
            </div>
          </div>

          <div class="col-md-6">
            <div class="card card-body h-100">
              <h5>What I Know</h5>
              <hr />
              <p>
                Language: Python, Django, HTML5, CSS3, Bootstrap4 ,JavaScript(ES6),
                React, Java(basic)
              </p>
              <p>SQL: Mysql, Postgresql, MongoDB </p>
              <p>VCS: GITHUB </p>
              <p>Working Environment/OS: Linux.</p>
            </div>
          </div>
        </div>
        <br />
        <div class="row">
          <div class="col-md-6">
            <div class="card card-body h-100">
              <h5>How I Learn</h5>
              <hr />
              <p>By Start & Build Ugly Prototypes First.</p>

              <p>
                I can learn just about anything by having a final product to
                tear apart piece by piece. I break the code where I need to
                figure out why things work the way they do. Documentation is
                just a reference.
              </p>
            </div>
          </div>

          <div class="col-md-6">
            <div class="card card-body h-100">
              <h5>My Short Term Goals</h5>
              <hr />
              <p>
                After almost years of learning at my own workspace. I’m ready to
                learn something new. I'll collaborating and sharing my
                experience with others on github & other platforms.
              </p>
              <p>
                Aside from building small projects I would love to enter a
                position where I can be part of a bigger team & learn from
                others with more experience than myself.
              </p>
            </div>
          </div>
        </div>
        <br />
      </div>
    );
  }
}
