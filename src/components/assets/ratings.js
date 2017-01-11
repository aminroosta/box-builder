import React, { Component } from 'react'

export default class Rating extends Component {
    updateStars(count) {
        console.warn(count);
    }
    render() {
        const {rate,  updateStars} = this.props;
        return(
            <svg width="120px" height="20px" viewBox="22 612 250 39" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <desc>Created with Sketch.</desc>
                <defs></defs>
                <g id="rating" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" transform="translate(22.000000, 612.000000)">
                    <polygon onClick={() => updateStars(1)} id="rating-2" fill={(rate >= 1 ? '#FFFFFF' : '#BBBFC4')} points="20.188 31.446 32.548 38.906 29.269 24.846 40.188 15.386 25.808 14.166 20.188 0.906 14.568 14.166 0.188 15.386 11.107 24.846 7.828 38.906"></polygon>
                    <polygon onClick={() => updateStars(2)} id="rating-3" fill={(rate >= 2 ? '#FFFFFF' : '#BBBFC4')} points="72.188 31.446 84.548 38.906 81.268 24.846 92.188 15.386 77.808 14.166 72.188 0.906 66.567 14.166 52.188 15.386 63.108 24.846 59.828 38.906"></polygon>
                    <polygon onClick={() => updateStars(3)} id="rating-4" fill={(rate >= 3 ? '#FFFFFF' : '#BBBFC4')} points="125.188 31.446 137.548 38.906 134.268 24.846 145.188 15.386 130.808 14.166 125.188 0.906 119.568 14.166 105.188 15.386 116.108 24.846 112.828 38.906"></polygon>
                    <polygon onClick={() => updateStars(4)} id="rating-5" fill={(rate >= 4 ? '#FFFFFF' : '#BBBFC4')} points="177.188 31.446 189.549 38.906 186.268 24.846 197.188 15.386 182.807 14.166 177.188 0.906 171.568 14.166 157.188 15.386 168.109 24.846 164.828 38.906"></polygon>
                    <polygon onClick={() => updateStars(5)} id="rating-6" fill={(rate >= 5 ? '#FFFFFF' : '#BBBFC4')} points="229.188 31.446 241.548 38.906 238.269 24.846 249.188 15.386 234.807 14.166 229.188 0.906 223.568 14.166 209.188 15.386 220.108 24.846 216.829 38.906"></polygon>
                </g>
            </svg>
        )
    }
}