import React, { Component } from 'react';
import { connect } from 'react-redux';

import Gradient from "../gradient";
import ScheduleCourse from "./scheduleCourse";
import ProgressTracker from "./progressTracker";

class Library extends Component {

    renderCourses() {
        const data = this.props.courses

        return data.map( (course, index) => {
            if (course.enrolled) {
                return <ScheduleCourse {...course} key={index}/>
            }
        })
    }

    render() {
        return (
            <div className="schedule">
                <h1 className="schedule_library">My Schedule</h1>
                { this.renderCourses() }
                <Gradient/>
                <ProgressTracker/>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        courses: state.courses
    }
}

export default connect(mapStateToProps)(Library)