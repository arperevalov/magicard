import React from 'react';
import User from './../../User/User';
import Header from './components/Header';

let Turner = () => {
    return <div className='piece piece__turner'>
        <Header title='Turner'/>
        <div className='content'>
            <User name='George Mills'/>
            <span className='turn'>Now it's your turn!</span>
        </div>
    </div>
}

export default Turner