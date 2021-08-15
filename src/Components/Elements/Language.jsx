
import React, { Component } from 'react';

export default class Language extends Component {
    render() {
        const language = this.props;
        return (
            <div className='language'>
                <div className="default">{language.languageName}</div>
            </div>
        );
    }
}