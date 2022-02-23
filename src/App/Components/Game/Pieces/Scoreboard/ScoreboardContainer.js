import { connect } from 'react-redux';
import Scoreboard from './Scoreboard';

let getSumOfParams = (obj) => {
    return Object.values(obj).reduce((a,b) => a+b)
}

let mapStateToProps = (store) => {
    return {
        users: store.GamePage.users,
    }
}

export let mapDispatchToProps = (dispatch) => {
    return {
        params: (userParams)=>{
            return getSumOfParams(userParams)
        }
    }
}

const ScoreboardContainer = connect(mapStateToProps, mapDispatchToProps)(Scoreboard)

export default ScoreboardContainer