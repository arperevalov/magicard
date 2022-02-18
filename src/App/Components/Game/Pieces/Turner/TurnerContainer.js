import React from 'react';
import { connect } from 'react-redux';
import { changeTurnAC } from '../../../../Redux/reducers/userReducer';
import Turner from './Turner';


let mapStateToProps = (store) => {
    return {
        users: store.users,
        currentPlayer : store.currentPlayer,
        nextPlayer: store.nextPlayer,
        rounds: store.rounds,
        turns: store.turns
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        changeTurn: () => {
            dispatch(changeTurnAC())
        }
    }
}

const TurnerContainer = connect(mapStateToProps, mapDispatchToProps)(Turner)

export default TurnerContainer