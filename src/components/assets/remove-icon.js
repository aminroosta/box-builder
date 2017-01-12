import React, { Component } from 'react'

const RemoveIcon = ({onClick, size = 25}) => (
    <svg onClick={onClick} width={`${size}px`} height={`${size}px`} viewBox="450 23 70 70" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <desc>Created with Sketch.</desc>
        <defs></defs>
        <g id="ic_cancel" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" transform="translate(450.000000, 23.000000)" strokeLinecap="round">
            <g id="cross" transform="translate(14.583333, 14.583333)" stroke="#FFFFFF" strokeWidth="6">
                <path d="M-2.98427949e-13,-2.98427949e-13 L41.2478956,41.2478956" id="Line"></path>
                <path d="M40.8333333,-2.98427949e-13 L-2.93246908e-13,40.8333333" id="Line"></path>
            </g>
        </g>
</svg>
)

export default RemoveIcon;