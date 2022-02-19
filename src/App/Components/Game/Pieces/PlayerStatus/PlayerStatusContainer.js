import React from 'react';
import { connect } from 'react-redux';
import { changeParamAC, decrementParamAC, incrementParamAC } from '../../../../Redux/reducers/userReducer';
import PlayerStatus from './PlayerStatus';


let mapStateToProps = (store) => {
    return {
        currentPlayer: store.currentPlayer,
        users: store.users
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        decrementUserParam: (parameterIndex) => {
            dispatch(decrementParamAC(parameterIndex))
        },
        incrementUserParam: (parameterIndex) => {
            dispatch(incrementParamAC(parameterIndex));
        },
        changeUserParam: (value, parameterIndex) => {
            dispatch(changeParamAC(value, parameterIndex))
        }
    }
}


const PlayerStatusContainer = connect(mapStateToProps, mapDispatchToProps) (PlayerStatus)

export default PlayerStatusContainer