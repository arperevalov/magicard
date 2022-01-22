import React from 'react';
import User from './../../User/User';
import Header from './components/Header';

let Scoreboard = () => {
    return <div className='piece piece__scoreboard'>
        <Header title='Scoreboard'/>
        <div className='content'>
            <User name='George Mills' points="123"/>
            <User name='Jennifer Carpenter' points="32"/>
            <User name='Bill' points="231" tag='newcomer'/>
        </div>
    </div>
}

export default Scoreboard