import React, { Component } from "react";
import Icon from "../icon";
import Arrow from "./arrow";
import Action from "./action";

class LibraryCourse extends Component {
  render() {
    return (
      <div className="library-course">
        <div className="library-course_title-check">
          <label className="library-course_title">{this.props.title}</label>
          {Icon("fas fa-check", "library-course_icon")}
        </div>
        <Arrow className="library-course_arrow" />
        <Action className="library-course_action" />
        <div className="library-course_description">
          <label>Course Description</label>
          <p>
              {this.props.description}
          </p>
        </div>
      </div>
    );
  }
}

export default LibraryCourse;
