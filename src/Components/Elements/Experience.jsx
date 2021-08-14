
import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

export default class Experience extends Component {
    render() {
        const work = this.props;
        return (
            <div className="experience">
                <div className="experienceInfo">
                    <div className="experienceCompany">
                        <a href={work.website} className="companyName">{work.companyName}</a>
                        <p className="jobTitle">{work.jobTitle}</p>
                        <p className="workYears">{work.years}</p>
                    </div>
                    <div className="experienceSkills">
                        <p>{work.information}</p>
                    </div>
                </div>
                <div className='experienceLanguages'>
                    {work.languages.map(language => (
                        <div className={language.color}>{language.languageName}</div>
                    ))}
                </div>
            </div>
        );
    }
}