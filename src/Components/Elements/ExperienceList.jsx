import React, { Component } from 'react';
import { workList } from '../Data/Work';
import Experience from './Experience'

export default class ExperienceList extends Component {
    render() {
        console.log(workList)
        return (
            <div className="experienceList">
                <p className="experienceTitle">Work Experience</p>
                {workList.map(work => <Experience {...work} />)}
                <p className="bottomTitle">scroll for more about me</p>
            </div>
        );
    }
}