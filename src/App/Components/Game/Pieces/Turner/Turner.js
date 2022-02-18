import React from 'react';
import User from '../../../User/User';
import Header from '../components/Header';

let Turner = (props) => {
    
    let nextTurn = () =>{
        props.changeTurn()
    }

    return <div className='piece piece__turner'>
        <Header title='Turner'/>
        <div className='content'>
            <div className='info'>
                <div className='info__item'>
                    <span className='info__name'>Rounds</span>
                    <span className='info__value'>{props.rounds}</span>
                </div>

                <div className='info__item'>
                    <span className='info__name'>Turns</span>
                    <span className='info__value'>{props.turns}</span>
                </div>
            </div>
            <hr/>
            <div className='turn'>
                <span className='turn__name'>Current player</span>
                <User user={props.users[props.currentPlayer]}/>
            </div>
            <hr/>
            <div className='turn'>
                <span className='turn__name'>Next player</span>
                <User user={props.users[props.nextPlayer]}/>
            </div>
            
        </div>
        <button className='piece__turner turner__button h2' onClick={nextTurn}>Change turn</button>
    </div>
}

export default Turner