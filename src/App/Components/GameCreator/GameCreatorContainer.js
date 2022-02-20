import { connect } from "react-redux";
import { changeGameNameValueAC, changeNewUserValueAC, changePieceAC, createUserAC } from "../../Redux/reducers/gameReducer";
import GameCreator from "./GameCreator";

let mapStateToProps = (store) => {
    return {
        name: store.GamePage.settings.name,
        pieces: store.GamePage.settings.pieces,
        availablePieces: store.GameCreatorPage.availablePieces,
        users: store.GamePage.users,
        newUserValue: store.GamePage.settings.newUserValue
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        changeGameNameValue: (value) => {
            dispatch(changeGameNameValueAC(value))
        },
        changePiece: (name, value) => {
            dispatch(changePieceAC(name, value))
        },
        changeNewUserValue: (value) => {
            dispatch(changeNewUserValueAC(value))
        },
        createUser: (name) => {
            dispatch(createUserAC(name))
        }
    }
}

const GameCreatorContainer = connect(mapStateToProps, mapDispatchToProps)(GameCreator)

export default GameCreatorContainer