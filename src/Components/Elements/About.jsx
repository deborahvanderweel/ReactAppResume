import React, { Component } from 'react';
import { profile } from '../Data/Profile';
import github from '../../Images/github.svg';
import linkedIn from '../../Images/linkedin.svg';
import spotify from '../../Images/spotify.svg';

export default class About extends Component {

    render() {
        return (
            <div className="aboutMe">
                {profile.map((data, key) => {
                    return (
                        <div style={{ marginTop: 'auto' }} key={key}>
                            <div className="name">
                                <p className="hello">Hi! &#128075;</p>
                            </div>
                            <div className="job">{data.aboutme}
                                <a href={data.jobUrl} style={{ color: '#0066ff' }}>{data.job}</a>
                                {data.prev}
                                <a href={data.jobUrl2} style={{ color: '#0066ff' }}>{data.job2}</a>
                                {data.school}<a href={data.universityUrl} style={{ color: '#0066ff' }}>{data.university}</a>.
                            </div>
                            <a href="https://github.com/deborahvanderweel"><button className="sayHi">&#128140; Say hi!</button></a>
                            <div class="contactIcons">
                                <a className="contactIcon" href="https://github.com/deborahvanderweel"><img src={github}></img></a>
                                <a className="contactIcon" href="https://github.com/deborahvanderweel"><img src={linkedIn}></img></a>
                                <a className="contactIcon" href="https://github.com/deborahvanderweel"><img src={spotify}></img></a>
                            </div>
                        </div>
                    );
                })}
                <p className="bottomTitle">scroll to get to know me</p>
            </div>
        )
    }
}