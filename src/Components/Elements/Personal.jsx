import React from 'react';

const Personal = (props) => {
    const card = props;

    return (
        <div className={"personalDiv"} id={"div" + card.id}>
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