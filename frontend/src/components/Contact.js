import React, { Component } from "react";

export default class Contact extends Component {
  render() {
    return (
      <div className="container">
        <h2 style={{ fontFamily: "Comic Sans MS", textAlign: "center" }}>
          Contact
        </h2>
        <div class="post">
          <h3 class="post-title">Contact Me</h3>
          <p>
            I am reachable on all major social media like{" "}
            <a href="https://www.facebook.com/matrosdz.mehedi">facebook</a>,
            <a href="https://twitter.com/">twitter</a>,{" "}
            <a href="https://www.linkedin.com/in/mehedi-hasan-khondoker-318848196">
              linkedin
            </a>
            etc. You can contact me via email as well.
          </p>

          <p>
            I would appreciate if you do not send email for following reasons:
          </p>
          <ol>
            <li>
              Query regarding a question or answer on StockOverflow. You can
              read in details at{" "}
              <a href="https://codeblog.jonskeet.uk/2012/08/22/stack-overflow-and-personal-emails/">
                Jon Skeet’s article
              </a>{" "}
              regarding this issue.
            </li>
            <li>
              You want me to help you with problems which are not related to
              contents of this website.
            </li>

            <li>You want your link to be posted in this website.</li>

            <li>Send spam emails to me.</li>
            <li>
              Want to approach me for marketing purpose. As I do not have any
              intension of earning money or promote things on my website,
              <br /> I can’t accept any such proposal.
            </li>
          </ol>
          <h4>My email address</h4>
          <a href=" mailto:matrosdzmehedi111@gmail.com">
            matrosdzmehedi111@gmail.com
          </a>
        </div>
      </div>
    );
  }
}
