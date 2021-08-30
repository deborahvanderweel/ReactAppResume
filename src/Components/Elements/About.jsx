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
                                <a target="_blank" rel="noopener noreferrer" href={data.jobUrl}>{data.job}</a>
                                {data.prev}
                                <a target="_blank" rel="noopener noreferrer" href={data.jobUrl2}>{data.job2}</a>
                                {data.school}<a target="_blank" rel="noopener noreferrer" href={data.universityUrl}>{data.university}</a>.
                            </div>
                            <a target="_blank" rel="noopener noreferrer" href="mailto:deborah.vanderweel@gmail.com"><button className="sayHi">&#128140; Say hi!</button></a>
                            <div class="contactIcons">
                                <a target="_blank" rel="noopener noreferrer" className="contactIcon" href="https://github.com/deborahvanderweel"><img src={github}></img></a>
                                <a target="_blank" rel="noopener noreferrer" className="contactIcon" href="https://www.linkedin.com/in/deborahvanderweel/"><img alt="linkedin" src={linkedIn}></img></a>
                                <a target="_blank" rel="noopener noreferrer" className="contactIcon" href="https://open.spotify.com/user/deborah.vanderweel"><img alt="spotify" src={spotify}></img></a>
                            </div>
                        </div>
                    );
                })}
                <p className="bottomTitle">scroll to get to know me</p>
            </div>
        )
    }
}