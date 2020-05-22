import React, { Component } from 'react';
import Icon from "../icon";

class LibraryCourse extends Component {
    render() {
        return (
            <div className="library-course">
                <label className="library-course_title">Problem Solving</label>
                { Icon("fas fa-check",  "library-course_icon") }
                {/* arrow component */}
                {/* action button component */}
                <div className="library-course_description">
                    <label>Course Description</label>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ultrices aliquet sem, non aliquet ipsum ultrices in. Praesent molestie tellus ornare fermentum rutrum. Orci </p>
                </div>
            </div>
        )
    }
}

export default LibraryCourse;