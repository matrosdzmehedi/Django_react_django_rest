import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <div
        style={{
          height: "50px",
          backgroundColor: "#000",
          color: "#fff",
          fontSize: "10px",
          textAlign: "center",
          clear: "both",
        }}
      >
        <p>
          <span>
            © Copyright by MEHEDI (2020).
            <br />
            <code
              style={{
                color: "#fff",
                paddingLeft: "13rem",
              }}
            >
              Powered by <span style={{ fontSize: "12px" }}>React+Django.</span>
            </code>
          </span>
        </p>
      </div>
    );
  }
}
