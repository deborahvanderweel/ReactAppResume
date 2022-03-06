import React, { useEffect, useRef } from 'react';
import { cards } from '../Data/Cards';
import Personal from './Personal';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const PersonalList = () => {
    const el = useRef();

    useEffect(() => {
        gsap.timeline({
            scrollTrigger: {
                trigger: ".personalList",
                start: 'top top',
                end: '+=1500',
                scrub: true,
                pin: true
            }
        })
            .from(".personalTitle", {
                duration: 0.3,
                y: -25,
                opacity: 0,
            })
            .from(".cards > #div1", {
                x: -300,
                opacity: 0,
                duration: 2,
                ease: "power2",
            }, 'slideIn')
            .from(".cards > #div2", {
                y: 400,
                duration: 2,
                ease: "power2",
                opacity: 0,
            }, 'slideIn')
            .from(".cards > #div3", {
                x: 300,
                duration: 2,
                ease: "power2",
                opacity: 0,
            }, 'slideIn')
            .from(".toyInfo", {
                duration: 4,
                ease: "power2",
                opacity: 0,
                stagger: 0.5
            })
            .to(".personalList", {
                duration: 4,
                top: -100,
                ease: "power2",
                opacity: 0,
            })
    }, []);

    return (
        <div className="personalList" rel={el}>
            <p className="personalTitle">About me <span>&#128105;</span></p>
            <div className="cards">
                {cards.map(card => <Personal {...card} key={card.title} />)}
            </div>
        </div>
    );
}

export default PersonalList;