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
            // Animation for the wave emoji
            .to('.wave', { rotation: '14.0deg', duration: 0.1, delay: 0.5 })
            .to('.wave', { rotation: '-8.0deg', duration: 0.1 })
            .to('.wave', { rotation: '-14.0deg', duration: 0.1 })
            .to('.wave', { rotation: '-4.0deg', duration: 0.1 })
            .to('.wave', { rotation: '10.0deg', duration: 0.1 })
            .to('.wave', { rotation: '0deg', duration: 0.1 })
            // Other timeline animation
            .to(q(".blue"), {
                color: '#0066ff',
                stagger: 0.5,
            })
            .fromTo(q(".contactImg"), {
                autoAlpha: 0.5,
                stagger: 0.5,
                ease: "power1.in"
            }, {
                stagger: 0.5,
                autoAlpha: 1,
                duration: 1,
                ease: "power1.out",
            })
            .to(q(".contactImg"), {
                autoAlpha: 0.75,
                stagger: 0.5,
                ease: "power1.in"
            })
    }, []);


    return (
        <div className="aboutMe" ref={el}>
            {profile.map((data, key) => {
                return (
                    <div style={{ marginTop: 'auto' }} key={key}>
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
            <p className="bottomTitle">scroll to get to know me</p>
        </div>
    )
}


export default About;