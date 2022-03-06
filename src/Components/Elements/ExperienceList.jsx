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

    useEffect(() => {
        gsap.timeline({
            scrollTrigger: {
                trigger: ".experienceList",
                start: 'top top',
                end: '+=1000',
                scrub: true,
                pin: true
            }
        })
            .from(".experienceTitle", {
                duration: 0.3,
                y: -25,
                opacity: 0,
            })
            .from(".experienceLanguages > .language", {
                top: -100,
                ease: "power2",
                opacity: 0,
                stagger: 0.1
            })
            .from(".experience", {
                duration: 4,
                ease: "power2",
                y: 50,
                opacity: 0,
                stagger: 0.5
            })
    }, []);

    return (
        <div className="experienceList" rel={el}>
            <p className="experienceTitle">Work experience <span>&#128188;</span></p>
            <div className='experienceLanguages'>
                {languages.map(language => <Language {...language} key={language.languageName} />)}
            </div>
            {workList.map(work => <Experience {...work} key={work.jobTitle} />)}
        </div>
    );
}

export default ExperienceList;