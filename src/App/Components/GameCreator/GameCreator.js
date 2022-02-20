import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import User from '../User/User';


let GameCreator = (props) => {

    let changeGameNameValue = () => {
        props.changeGameNameValue(nameRef.current.value)
    }

    let changePiece = (e) => {
        props.changePiece(e.target.name, e.target.checked)
    }

    let changeNewUserNameValue = () => {
        props.changeNewUserValue(newUserName.current.value)
    }

    let createUser = (e) => {
        e.preventDefault()
        props.createUser()
    }

    let startGame = (e) => {
        
    }

    let nameRef = React.createRef()

    let piecesRef = {}

    let newUserName = React.createRef()

    let availablePieces = props.availablePieces.map((item, index) => {
        piecesRef[index] = useRef(null);
        return <div key={index}>
            <label>
                <input ref={piecesRef[index]} type="checkbox" value={props.pieces[item]} onChange={changePiece} name={item} />
                <span>{item}</span>
            </label>
        </div>
    })

    let users = props.users.map(i => {return (<User user={i} key={i.id}/>)})

    return <div className='game'>
        <h1 className='h1'>Start New Game</h1>
        
        <label>
            <span>1. Name the game</span>
            <input type="text" ref={nameRef} value={props.name} onChange={changeGameNameValue} required/>
        </label>
        
        <div>
            <span>2. Choose pieces for the game</span>
            {availablePieces}
        </div>
        
        <form onSubmit={createUser}>
            <label>
                <span>3. Add players</span>
                <input type="text" ref={newUserName} value={props.newUserValue} onChange={changeNewUserNameValue} required/>
            </label>
            <button type='submit'>Add player</button>
        </form>

        <div>
            <span>Players</span>
            <div>
                {users}
            </div>
        </div>

        <Link to="/game">START GAME</Link>
    </div>
}

export default GameCreator