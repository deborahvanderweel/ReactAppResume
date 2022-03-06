import React, { useEffect, useRef } from 'react';
import { profile } from '../Data/Profile';
import github from '../../Images/github.svg';
import linkedIn from '../../Images/linkedin.svg';
import spotify from '../../Images/spotify.svg';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const el = useRef();
    const q = gsap.utils.selector(el);
    const tl = gsap.timeline()

    useEffect(() => {
        tl
            // animation thats starts right away
            .to('.wave', { rotation: '14.0deg', duration: 0.1, delay: 0.5 })
            .to('.wave', { rotation: '-8.0deg', duration: 0.1 })
            .to('.wave', { rotation: '-14.0deg', duration: 0.1 })
            .to('.wave', { rotation: '-4.0deg', duration: 0.1 })
            .to('.wave', { rotation: '10.0deg', duration: 0.1 })
            .to('.wave', { rotation: '0deg', duration: 0.1 })

        // animation that starts when scrolling
        gsap.timeline({
            scrollTrigger: {
                trigger: ".aboutMe",
                end: '+=2000',
                scrub: true,
                pin: true
            }
        })
            .to(q(".blue"), {
                color: '#0066ff',
                stagger: 0.5,
            })
            .to(".hello", {
                opacity: 0,
                x: -50,
                ease: "power4.inOut"
            })
            .to(".job", {
                opacity: 0,
                x: 50,
                ease: "power4.inOut"
            })
            .to(".sayHi", {
                scale: 0,
                ease: "power4.inOut"
            }, 'hide')
            .to(q(".contactImg"), {
                autoAlpha: 0,
                stagger: 0.2,
                ease: "power4.inOut"
            }, 'hide')
    }, []);

    return (
        <div className="aboutMe" ref={el}>
            {profile.map((data, key) => {
                return (
                    <div key={key}>
                        <div className="name">
                            <p className="hello">Hi! <span className="wave">&#128075;</span></p>
                        </div>
                        <div className="job">{data.aboutme}
                            <a target="_blank" rel="noopener noreferrer" className="blue" href={data.jobUrl}>{data.job}</a>
                            {data.prev}
                            <a target="_blank" rel="noopener noreferrer" className="blue" href={data.jobUrl2}>{data.job2}</a>
                            {data.school}<a className="blue" target="_blank" rel="noopener noreferrer" href={data.universityUrl}>{data.university}</a>.
                            </div>
                        <a target="_blank" rel="noopener noreferrer" href="mailto:deborah.vanderweel@gmail.com"><button className="sayHi">&#128140; Say hi!</button></a>
                        <div className="contactIcons">
                            <a target="_blank" rel="noopener noreferrer" className="contactIcon" href="https://github.com/deborahvanderweel">
                                <img alt="github" className="contactImg" src={github}></img>
                            </a>
                            <a target="_blank" rel="noopener noreferrer" className="contactIcon" href="https://www.linkedin.com/in/deborahvanderweel/">
                                <img alt="linkedin" className="contactImg" src={linkedIn}></img>
                            </a>
                            <a target="_blank" rel="noopener noreferrer" className="contactIcon" href="https://open.spotify.com/user/deborah.vanderweel">
                                <img alt="spotify" className="contactImg" src={spotify}></img>
                            </a>
                        </div>
                    </div>
                );
            })}
        </div>
    )
}


export default About;