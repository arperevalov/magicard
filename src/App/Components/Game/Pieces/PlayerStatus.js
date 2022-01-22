import React from 'react';
import Header from './components/Header';

let params = (props) => {
    props.player.params.map((i) => {
        return (
            <li className='stat'>
                <span className='stat__name'>{i.param}</span>
                <span className='stat__value'>{i.value}</span>
            </li>
        )
    })
}

let PlayerStatus = (props) => {
    return <div className='piece piece__playerStatus'>
        <Header title='Player status'/>
        <div className='content'>
            <ul className='stats'>
                <li className='stat'>
                    <span className='stat__name'>HP</span>
                    <span className='stat__value'>32</span>
                </li>
                <li className='stat'>
                    <span className='stat__name'>Gold</span>
                    <span className='stat__value'>323</span>
                </li>
                <li className='stat'>
                    <span className='stat__name'>Deaths</span>
                    <span className='stat__value'>0</span>
                </li>
            </ul>
            <button>Other players</button>
        </div>
    </div>
}

export default PlayerStatus