import React from 'react';
import { ControlsPause, ControlsStop } from './components/Controls';
import Header from './components/Header';

let Stopwatch = (props) => {
    return <div className='piece piece__stopwatch'>
        <Header title='Stopwatch'/>
        <div className='content'>
            <div className='time'>00:23:12</div>
            <div className='controls'>
                <ControlsPause/>
                <ControlsStop/>
            </div>
        </div>
    </div>
}

export default Stopwatch