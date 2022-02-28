import React, { useRef } from 'react';
import User from '../../../User/User';
import Header from '../components/Header';



let PlayerStatus = (props) => {
    
    

    let statRef = {}

    let incrementParam = (e, parameterIndex) => {
        parseInt(statRef[e].current.value ++)
        props.changeUserParam( parseInt(statRef[e].current.value), parameterIndex)
    }

    let decrementParam = (e, parameterIndex) => {
        if (parseInt(statRef[e].current.value) > 0) {
            parseInt(statRef[e].current.value --)
            props.changeUserParam( parseInt(statRef[e].current.value), parameterIndex)
        }
    }

    let changeParam = (e, parameterIndex) =>{
        props.changeUserParam(statRef[e].current.value, parameterIndex)
    }

    let params = (props) => {
        let params = props.users[props.currentPlayer].params
        let paramsNew = Object.getOwnPropertyNames(params)
        return paramsNew
            .map((parameter, index) => {

                statRef[index] = useRef(null);
                return (
                    <li className='stat' key={index}>
                        <span className='stat__name'>{parameter}</span>
                        <div className='stat__controls'>
                            <button className='stat__control' onClick={()=>{decrementParam(index,parameter)}}>–</button>
                            <input className='stat__value' type='number' min='0' value={params[parameter]} name={index} ref={statRef[index]} onChange={() => {changeParam(index, parameter)}} id={parameter}/>
                            <button className='stat__control' onClick={()=>{incrementParam(index,parameter)}}>+</button>
                        </div>
                    </li>
                )
            })
            
    }

    return <div className='piece piece__playerStatus'>
        <Header title='Player status'/>
        <div className='content'>
            <User user={props.users[props.currentPlayer]}/>
            <ul className='stats'>
                {params(props)}
            </ul>
        </div>
    </div>
}

export default PlayerStatus