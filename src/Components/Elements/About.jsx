import React, { Component } from 'react';
import { profile } from '../Data/Profile';

export default class About extends Component {

    render() {
        return (
            <div className="aboutMe">
                {profile.map((data, key) => {
                    return (
                        <div key={key}>
                            <div className="name">
                                <p className="hello">Hello &#128075;</p>
                                <p className="iAm">I'm {data.name}</p>
                            </div>
                            <div className="job">{data.aboutme}</div>
                        </div>
                    );
                })}

            </div>
        )
    }
}