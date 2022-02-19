import { connect } from 'react-redux';
import { changeParamAC, decrementParamAC, incrementParamAC } from '../../../../Redux/reducers/gameReducer';
import PlayerStatus from './PlayerStatus';


let mapStateToProps = (store) => {
    return {
        currentPlayer: store.GamePage.currentPlayer,
        users: store.GamePage.users
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