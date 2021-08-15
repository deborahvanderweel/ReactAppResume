import React, { Component } from 'react';

export default class Personal extends Component {
    render() {
        const card = this.props;
        return (
            <div className="personalDiv">
                <div id="container">
                    <div class="productDetails">
                        <p className="bigTitle">{card.title}</p>
                        <p className="toyInfo">{card.information}</p>
                        <a href={card.url} className="instagramUrl"><img className="instagramIcon" src={card.icon}></img> {card.label}</a>
                    </div>
                    <img src={card.image} className="productImage"></img>
                </div>
            </div >
        )
    }
}