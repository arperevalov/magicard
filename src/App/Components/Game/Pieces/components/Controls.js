import React from 'react';

export const ControlsPlay = (props) => {
    return <button className='buttons controls__play'>
        <svg
            width="32"
            height="33"
            viewBox="0 0 32 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <rect y="0.5" width="32" height="32" rx="16" fill="white"/>
            <path d="M21.5 16.5L13.5 11.5V21.5L21.5 16.5Z" fill="#393939"/>
        </svg>
    </button>
}
export const ControlsPause = (props) => {
    return <button className='buttons controls__pause'>
        <svg
            width="32"
            height="33"
            viewBox="0 0 32 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <rect y="0.5" width="32" height="32" rx="16" fill="white"/>
            <rect x="12" y="11.5" width="3" height="10" fill="#393939"/>
            <rect x="17" y="11.5" width="3" height="10" fill="#393939"/>
        </svg>
    </button>
}

export const ControlsStop = (props) => {
    return <button className='buttons controls__stop'>
        <svg
            width="32"
            height="33"
            viewBox="0 0 32 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <rect y="0.5" width="32" height="32" rx="16" fill="white"/>
            <rect x="12" y="12.5" width="8" height="8" fill="#393939"/>
        </svg>
    </button>
}

export const ControlsNull = (props) => {
    return <button className='buttons controls__null'>
        <svg
            width="32"
            height="33"
            viewBox="0 0 32 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <rect y="0.5" width="32" height="32" rx="16" fill="white"/>
            <path
                d="M16.2835 11.129C14.0835 11.2167 12.156 12.6288 11.409 14.7C11.389 14.7559 11.3323 14.79 11.2735 14.7815L10.429 14.6545C10.3347 14.6424 10.2415 14.6834 10.1865 14.761C10.1326 14.84 10.1285 14.9429 10.176 15.026L11.5155 17.376C11.5541 17.4434 11.6219 17.4891 11.6989 17.4996C11.7759 17.5101 11.8534 17.4842 11.9085 17.4295L13.7935 15.5565C13.8609 15.4898 13.8847 15.3909 13.8552 15.3009C13.8256 15.2109 13.7478 15.1453 13.654 15.1315L12.7965 15.0035C12.7577 14.9978 12.7238 14.9743 12.7049 14.9399C12.6861 14.9055 12.6844 14.8643 12.7005 14.8285C13.525 12.962 15.589 11.9774 17.5584 12.5113C19.5278 13.0451 20.8121 14.9374 20.5809 16.9647C20.3498 18.992 18.6726 20.5466 16.6335 20.6235C16.4103 20.6275 16.2061 20.7503 16.0979 20.9457C15.9897 21.1411 15.994 21.3794 16.1092 21.5707C16.2243 21.7621 16.4328 21.8775 16.656 21.8735H16.6795C18.607 21.8143 20.3551 20.7273 21.2606 19.0247C22.1662 17.3222 22.0903 15.265 21.0619 13.6338C20.0335 12.0025 18.2101 11.0471 16.2835 11.13V11.129Z"
                fill="#393939"/>
        </svg>
    </button>
}