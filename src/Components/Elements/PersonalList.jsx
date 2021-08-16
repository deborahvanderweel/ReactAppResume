import React, { Component } from 'react';
import { cards } from '../Data/Cards';
import Personal from './Personal'

export default class PersonalList extends Component {
    render() {
        return (
            <div className="personalList">
                <p className="personalTitle">About me <span>&#128105;</span></p>
                <div className="cards">
                    {cards.map(card => <Personal {...card} />)}
                </div>
                <p className="bottomTitle">scroll for work experience</p>
            </div>
        );
    }
}