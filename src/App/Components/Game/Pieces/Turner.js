import React from 'react';
import { changeTurnCreator } from '../../Redux/reducers/userReducer';
import User from './../../User/User';
import Header from './components/Header';

let Turner = (props) => {

    let defineTurn = props.state.users.map((i) => {
            if (i.isTurn) {
                console.log(i.name)
                return (<User name={i.name} tag={i.tag} key={i.id}/>)
            } else {
                console.log(i.name + ' is false!')
                return false
                
            }
        })
    
    let changeTurn = () =>{
        props.dispatch(changeTurnCreator())
    }

    return <div className='piece piece__turner'>
        <Header title='Turner'/>
        <div className='content'>
            {defineTurn}
            <span className='turn'>Now it's your turn!</span>
            <button onClick={changeTurn}>Change turn</button>
        </div>
    </div>
}

export default Turner