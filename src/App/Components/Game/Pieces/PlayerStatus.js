import React from 'react';
import Header from './components/Header';



let PlayerStatus = (props) => {

    let defineTurn = props
        .players
        .findIndex(player => {
            return player.isTurn === true
        })

    let params = (props) => {
        let params = props.players[defineTurn].params
        let paramsNew = Object.getOwnPropertyNames(params)
        return paramsNew
            .map((parameter, index) => {
                return (
                    <li className='stat' key={index}>
                        <span className='stat__name'>{parameter}</span>
                        <span className='stat__value'>{params[parameter]}</span>
                    </li>
                )
            })
            
    }

    return <div className='piece piece__playerStatus'>
        <Header title='Player status'/>
        <div className='content'>
            <ul className='stats'>
                {params(props)}
            </ul>
            <button>Other players</button>
        </div>
    </div>
}

export default PlayerStatus