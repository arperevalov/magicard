import React from 'react';
import { changeTurnCreator } from '../../../Redux/reducers/userReducer';
import User from './../../User/User';
import Header from './components/Header';

let Turner = (props) => {

    let defineTurn = props.state.users.map((user) => {
            if (user.isTurn) {
                return (<User name={user.name} tag={user.tag} key={user.id}/>)
            } else {
                return false
            }
        })
    
    let changeTurn = () =>{
        props.dispatch(changeTurnCreator())
    }

    return <div className='piece piece__turner'>
        <Header title='Turner'/>
        <div className='content'>
            <div className='info'>
                <div className='info__item'>
                    <span className='info__name'>Rounds</span>
                    <span className='info__value'>{props.state.rounds}</span>
                </div>

                <div className='info__item'>
                    <span className='info__name'>Turns</span>
                    <span className='info__value'>{props.state.turns}</span>
                </div>
            </div>
            <hr/>
            <div className='turn'>
                <span className='turn__name'>Current player</span>
                <User user={props.state.users[props.state.currentPlayer]}/>
            </div>
            <hr/>
            <div className='turn'>
                <span className='turn__name'>Next player</span>
                <User user={props.state.users[props.state.nextPlayer]}/>
            </div>
            
        </div>
        <button className='piece__turner turner__button h2' onClick={changeTurn}>Change turn</button>
    </div>
}

export default Turner