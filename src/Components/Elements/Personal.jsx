import React, { Component } from 'react';

export default class Personal extends Component {
    render() {
        const card = this.props;
        return (
            <div className="personalDiv">
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
}