import React, { Component } from 'react';
import { workList } from '../Data/Work';
import Experience from './Experience'

export default class ExperienceList extends Component {
    render() {
        console.log(workList)
        return (
            <div className="experienceList">
                {workList.map(work => <Experience {...work} />)}
            </div>
        );
    }
}