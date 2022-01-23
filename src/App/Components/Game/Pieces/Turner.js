import React from 'react';
import { changeTurnCreator } from '../../Redux/reducers/userReducer';
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

    let defineNext = props.state.users.map((user, index, array) => {
        if (user.isTurn && index < array.length-1) {
            return (<User name={array[index+1].name} tag={array[index+1].tag} key={array[index+1].id}/>)
        } else if (user.isTurn && index >= array.length-1) {
            return (<User name={array[0].name} tag={array[0].tag} key={array[0].id}/>)
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
            {defineTurn}
            <span className='turn'>Now it's your turn!</span>
            <button onClick={changeTurn}>Change turn</button>
            <hr/>
            {defineNext}
            <span className='turn'>Is next!</span>
        </div>
    </div>
}

export default Turner