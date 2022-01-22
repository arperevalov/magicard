import React from 'react';
import Dice from './Pieces/Dice';
import Helpers from './Pieces/Helpers';
import PlayerStatus from './Pieces/PlayerStatus';
import Scoreboard from './Pieces/Scoreboard';
import Stopwatch from './Pieces/Stopwatch';
import Timer from './Pieces/Timer';
import Turner from './Pieces/Turner';

let Game = () => {
    return <div className='game'>
        <h1 className='h1'>Bill’s Birthday!</h1>
        <div className='gameControls'>
            <button className='gameControls__pauseGame h2'>
                <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <rect width="32" height="32" rx="16" fill="#EBEBEB"/>
                    <rect x="12" y="11" width="3" height="10" fill="#393939"/>
                    <rect x="17" y="11" width="3" height="10" fill="#393939"/>
                </svg>
                Pause game</button>
            <a href='#helpers' className='gameControls__helpers h2'>
                <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 14.5L16 18.5L22 14.5" stroke="#393939" strokeWidth="2"/>
                </svg>
                Helpers</a>
        </div>
        <div className='pieces'>
            <Turner/>
            <div className='line'>
            <Timer/>
            <Stopwatch/>
            </div>
            <Scoreboard/>
            <div className='line'>
            <Dice/>
            <PlayerStatus/>
            </div>
            <Helpers/>
            
        </div>
    </div>
}

export default Game