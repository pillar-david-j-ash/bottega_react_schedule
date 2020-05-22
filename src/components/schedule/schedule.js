import React, { Component } from 'react';
import Gradient from "../gradient";
import ScheduleCourse from "./scheduleCourse";
import ProgressTracker from "./progressTracker";

class Library extends Component {
    render() {
        return (
            <div className="schedule">
                <h1 className="schedule_library">My Schedule</h1>
                <ScheduleCourse title={"Problem Solving"}/>
                <ScheduleCourse title={"Problem Solving"}/>
                <ScheduleCourse title={"Problem Solving"}/>
                <Gradient/>
                <ProgressTracker/>
            </div>
        )
    }
}

export default Library