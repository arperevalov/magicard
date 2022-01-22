import React from 'react';
import {ControlsPlay} from './components/Controls';
import Header from './components/Header';

let Dice = (props) => {
    return <div className='piece piece__dice'>
        <Header title='Dice'/>
        <div className='content'>
            <svg
                width="98"
                height="96"
                viewBox="0 0 98 96"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_77_702)">
                    <g filter="url(#filter0_d_77_702)">
                        <rect
                            x="-0.00012207"
                            y="0.6427"
                            width="52.5691"
                            height="52.5691"
                            rx="10.5138"
                            fill="white"/>
                        <rect
                            x="17.0847"
                            y="15.7565"
                            width="5.25692"
                            height="5.25692"
                            rx="2.62846"
                            fill="#393939"/>
                        <rect
                            x="23.6559"
                            y="24.299"
                            width="5.25692"
                            height="5.25692"
                            rx="2.62846"
                            fill="#393939"/>
                        <rect
                            x="30.2271"
                            y="32.8414"
                            width="5.25692"
                            height="5.25692"
                            rx="2.62846"
                            fill="#393939"/>
                    </g>
                    <g filter="url(#filter1_d_77_702)">
                        <rect
                            x="23.6561"
                            y="58.1852"
                            width="52.5691"
                            height="52.5691"
                            rx="10.5138"
                            transform="rotate(-45 23.6561 58.1852)"
                            fill="white"/>
                        <rect
                            x="46.424"
                            y="56.7911"
                            width="5.25692"
                            height="5.25692"
                            rx="2.62846"
                            transform="rotate(-45 46.424 56.7911)"
                            fill="#393939"/>
                        <rect
                            x="67.7977"
                            y="59.5792"
                            width="5.25692"
                            height="5.25692"
                            rx="2.62846"
                            transform="rotate(-45 67.7977 59.5792)"
                            fill="#393939"/>
                    </g>
                </g>
                <defs>
                    <filter
                        id="filter0_d_77_702"
                        x="-40.0001"
                        y="-37.3573"
                        width="132.569"
                        height="132.569"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"/>
                        <feOffset dy="2"/>
                        <feGaussianBlur stdDeviation="20"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/>
                        <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow_77_702"/>
                        <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow_77_702"
                            result="shape"/>
                    </filter>
                    <filter
                        id="filter1_d_77_702"
                        x="-11.9889"
                        y="-12.6318"
                        width="145.634"
                        height="145.634"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"/>
                        <feOffset dy="2"/>
                        <feGaussianBlur stdDeviation="20"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/>
                        <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow_77_702"/>
                        <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow_77_702"
                            result="shape"/>
                    </filter>
                    <clipPath id="clip0_77_702">
                        <rect
                            width="98.0003"
                            height="94.7145"
                            fill="white"
                            transform="translate(-0.00012207 0.6427)"/>
                    </clipPath>
                </defs>
            </svg>

        </div>
    </div>
}

export default Dice