import React from 'react';
import { ControlsPlay } from './components/Controls';
import Header from './components/Header';

let Timer = () => {
    return <div className='piece piece__timer'>
        <Header title='Timer'/>
        <div className='content'>
            <div className='time'>00:01:00</div>
            <div className='controls'>
                <ControlsPlay/>
            </div>
        </div>
    </div>
}

export default Timer