import React from 'react';
import User from './../../User/User';
import Header from './components/Header';



let Scoreboard = (props) => {

    let players = props.players.map(i => {return (<User name={i.name} points={i.params.gold+i.params.hp-i.params.deaths} tag={i.tag} key={i.id}/>)})

    return <div className='piece piece__scoreboard'>
        <Header title='Scoreboard'/>
        <div className='content'>
            {players}
        </div>
    </div>
}

export default Scoreboard