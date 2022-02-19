import { connect } from 'react-redux';
import { changeTurnAC } from '../../../../Redux/reducers/gameReducer';
import Turner from './Turner';


let mapStateToProps = (store) => {
    return {
        users: store.GamePage.users,
        currentPlayer : store.GamePage.currentPlayer,
        nextPlayer: store.GamePage.nextPlayer,
        rounds: store.GamePage.rounds,
        turns: store.GamePage.turns
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