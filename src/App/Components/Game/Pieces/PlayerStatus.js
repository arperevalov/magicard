import React from 'react';
import { decrementParam, incrementParam } from '../../../Redux/reducers/userReducer';
import User from '../../User/User';
import Header from './components/Header';



let PlayerStatus = (props) => {

    let statRef = React.createRef('parameter')

    let incrementUserParam = (event) => {
        props.dispatch(incrementParam(event.target.attributes.parameterindex.value));
    }

    let decrementUserParam = (event) => {
        props.dispatch(decrementParam(event.target.attributes.parameterindex.value));
    }

    let params = (props) => {
        let params = props.store.users[props.store.currentPlayer].params
        let paramsNew = Object.getOwnPropertyNames(params)
        return paramsNew
            .map((parameter, index) => {
                return (
                    <li className='stat' key={index}>
                        <span className='stat__name'>{parameter}</span>
                        <div className='stat__controls'>
                            <button className='stat__control' onClick={decrementUserParam} parameterindex={parameter}>–</button>
                            <input className='stat__value' value={params[parameter]} ref={statRef} onChange />
                            <button className='stat__control' onClick={incrementUserParam} parameterindex={parameter}>+</button>
                        </div>
                    </li>
                )
            })
            
    }

    return <div className='piece piece__playerStatus'>
        <Header title='Player status'/>
        <div className='content'>
            <User user={props.store.users[props.store.currentPlayer]}/>
            <ul className='stats'>
                {params(props)}
            </ul>
        </div>
    </div>
}

export default PlayerStatus