import React, { useEffect, useRef } from 'react';
import { workList } from '../Data/Work';
import { languages } from '../Data/Languages';
import Experience from './Experience'
import Language from './Language';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ExperienceList = () => {
    const el = useRef();
    return (
        <div className="experienceList">
            <p className="experienceTitle">Work experience <span>&#128188;</span></p>
            <div className='experienceLanguages'>
                {languages.map(language => <Language {...language} key={language.languageName} />)}
            </div>
            {workList.map(work => <Experience {...work} key={work.jobTitle} />)}
        </div>
    );
}

export default ExperienceList;