import React, { useEffect, useRef } from 'react';
import { cards } from '../Data/Cards';
import Personal from './Personal';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const PersonalList = () => {
    return (
        <div className="personalList">
            <p className="personalTitle" >About me <span>&#128105;</span></p>
            <div className="cards">
                {cards.map(card => <Personal {...card} key={card.title} />)}
            </div>
            <p className="bottomTitle">scroll for work experience</p>
        </div>
    );
}

export default PersonalList;