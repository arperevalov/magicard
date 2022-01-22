import React from 'react';
import User from './../../User/User';
import Header from './components/Header';

let defineTurn = (props) => {
    props.players.map((i) => {
        if (i.isTurn) {
            console.log(i.name)
            return (<User name={i.name} key={i.id}/>)
        } else {
            console.log(i.name + ' is false!')
            return false
            
        }
    })
}

let Turner = (props) => {
    return <div className='piece piece__turner'>
        <Header title='Turner'/>
        <div className='content'>
            {defineTurn(props)}
            <User name='sdas'/>
            <span className='turn'>Now it's your turn!</span>
        </div>
    </div>
}

export default Turner