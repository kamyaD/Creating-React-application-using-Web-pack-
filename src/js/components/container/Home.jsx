import React, { Component } from "react";
import "../../../index.css";

class Home extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col align-self-center">
            <img src={require("./static/images/image1.jpg")} width="700px" />
            <p>
              <h3>Welcome to Bidii yetu</h3>
              <br />
              Bidii Yetu Self Help Group is a youth led Group registered with
              the Ministry of Labor, Social Security and Services – Kenya.
              <br /> It is a non-political, non-discriminatory and non-religious
              group operating in Kisumu County.
              Formed in 2014 by a group of<br/> youths led by Kamya Domnick, the
              group engages in Social-Economic projects that aims at empowering
              youths within Kisumu County.<br/> Currently, the group has four
              projects and these includes, linking youths to job opportunity,
              farming projects,<br/> Enhancing environmental sustainability and
              climate change resilience, and also Capacity building.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
