import { connect } from "react-redux";
import Game from "./Game";

let mapStateToProps = (store) => {
    return {
        pieces: store.GamePage.settings.pieces,
        gameName: store.GamePage.settings.name
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
    }
}

const GameContainer = connect(mapStateToProps, mapDispatchToProps)(Game)

export default GameContainer