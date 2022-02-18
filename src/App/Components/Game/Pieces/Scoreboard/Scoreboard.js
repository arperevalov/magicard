import React from 'react';
import User from '../../../User/User';
import Header from '../components/Header';



let Scoreboard = (props) => {

    let players = props.users.map(i => {return (<User user={i} points={i.params.Roads + i.params.Villages + i.params.Cities + i.params.Warriors} key={i.id}/>)}).sort((a,b) => {return b.props.points - a.props.points})

    return <div className='piece piece__scoreboard'>
        <Header title='Scoreboard'/>
        <div className='content'>
            {players}
        </div>
    </div>
}

export default Scoreboard