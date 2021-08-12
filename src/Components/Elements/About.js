import React, { Component } from 'react';
import { profile } from '../Data/Profile';
export default class About extends Component {

    render() {
        return (
            <div className="aboutMe">
                <div className="hello">
                    <p>Hi! &#128075;</p>
                </div>

                {profile.map((data, key) => {
                    return (
                        <div key={key}>
                            <div className="name">{data.name}</div>
                            <div className="job">{data.job}</div>
                            <div className="otherInfo">{data.age} | {data.town} | {data.country}</div>
                        </div>
                    );
                })}

            </div>
        )
    }
}