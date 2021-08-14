import React, { Component } from 'react';
import { profile } from '../Data/Profile';


export default class Personal extends Component {

    render() {
        return (
            <div className="personalDiv">
                <div id="container">
                    <div class="productDetails">
                        <p className="bigTitle">Toy collection</p>
                        <p class="toyInfo">I've been collection toys for about 5 years now. It all started with a Back to the Future funko pop. I created an Instagram account called <b>lovetheloot</b> where I show my collection.</p>
                    </div>
                    <div class="productImage"></div>
                </div>
                <p className="bottomTitle">scroll for work experience</p>
            </div >
        )
    }
}