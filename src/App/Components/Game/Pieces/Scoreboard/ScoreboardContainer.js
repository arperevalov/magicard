import React from 'react';
import { connect } from 'react-redux';

import Scoreboard from './Scoreboard';


let mapStateToProps = (store) => {
    return {
        users: store.users
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
    }
}

const ScoreboardContainer = connect(mapStateToProps, mapDispatchToProps)(Scoreboard)

export default ScoreboardContainer