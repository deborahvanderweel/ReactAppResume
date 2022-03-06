import React from 'react';

const Experience = (props) => {
    const work = props;

    return (
        <div className="experience">
            <div className="experienceInfo">
                <div className="experienceCompany">
                    <a target="_blank" rel="noopener noreferrer" href={work.website} className="companyName">{work.companyName}</a>
                    <p className="jobTitle">{work.jobTitle}</p>
                    <p className="workYears">{work.years}</p>
                </div>
                <div className="experienceSkills">
                    <p>{work.information}</p>
                </div>
            </div>
        </div>
    );
}

export default Experience;