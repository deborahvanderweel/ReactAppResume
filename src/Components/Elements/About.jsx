import React, { Component } from 'react';
import { profile } from '../Data/Profile';
import { Link } from 'react-scroll'


export default class About extends Component {

    render() {
        return (
            <div className="aboutMe">
                {profile.map((data, key) => {
                    return (
                        <div style={{ marginTop: 'auto' }} key={key}>
                            <div className="name">
                                <p className="hello">Hello &#128075;</p>
                                <p className="iAm">I'm {data.name}</p>
                            </div>
                            <div className="job">{data.aboutme}</div>
                        </div>
                    );
                })}
                <p className="bottomTitle">scroll to get to know me</p>
            </div>
        )
    }
}