import React, { useEffect, useRef } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Personal = (props) => {
    const card = props;
    const el = useRef();
    const q = gsap.utils.selector(el);

    // useEffect(() => {
    //     let tl = gsap.timeline({
    //         // yes, we can add it to an entire timeline!
    //         scrollTrigger: {
    //             trigger: ('.personalDiv'),
    //             pin: true,   // pin the trigger element while active
    //             start: "top top", // when the top of the trigger hits the top of the viewport
    //             end: "+=500", // end after scrolling 500px beyond the start
    //             scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
    //         }
    //     });
    // });

    useEffect(() => {
        gsap.to(".personalDiv", {
            x: 100,
            // color: 'red',
            duration: 2,
            scrollTrigger: {
                trigger: ".personalDiv",
                markers: true,
                start: "top center",
                end: "bottom 80px",
                scrub: true,
            }
        });
    }, []);

    return (
        <div className="personalDiv" rel={el}>
            <img src={card.image} alt="personalimg" className="personalImage"></img>
            <div id="container">
                <div className="personalDetails">
                    <a target="_blank" rel="noopener noreferrer" href={card.url} className="instagramUrl">{card.label}</a>
                    <p className="bigTitle">{card.title}</p>
                    <p className="toyInfo">{card.information}</p>
                </div>
            </div>
        </div >
    )
}

export default Personal;