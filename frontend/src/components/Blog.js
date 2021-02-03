import React, { Component } from "react";
import axios from "axios";

export default class Blog extends Component {
  state = {
    post: [],
  };

  componentDidMount() {
    axios.get(`https://reactdjangodrf.herokuapp.com/api/post`).then((res) => {
      const post = res.data;
      this.setState({ post });
    });
  }

  render() {
    return (
      <div className="container">
        {this.state.post.map((post) => (
          <div class="col-6">
            <div className="card">
              <div className="card-header text-center">
                <h4>{post.title}</h4>
              </div>
              <div className="card-body">
                <h5 className="card-title">Aurthor: {post.aurthor}</h5>
                <p className="card-text">{post.desc}</p>
              </div>
            </div>
            <br />
          </div>
        ))}
      </div>
    );
  }
}
