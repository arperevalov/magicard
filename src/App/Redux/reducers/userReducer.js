import _ from "lodash";

const CHANGE_TURN = 'CHANGE_TURN',
INCREMENT_PARAM = 'INCREMENT_PARAM',
DECREMENT_PARAM = 'DECREMENT_PARAM';

let defaultVal = {
    users: [
        {
            id: 1,
            name: 'George Mills',
            tag: false,
            isTurn: true,
            params: {
                Roads: 2,
                Villages: 2,
                Cities: 1,
                Warriors: 2
            }
        }, {
            id: 2,
            name: 'Jennifer Carpenter',
            tag: false,
            isTurn: false,
            params: {
                Roads: 4,
                Villages: 2,
                Cities: 0,
                Warriors: 1
            }
        }, {
            id: 3,
            name: 'Bill',
            tag: 'newcomer',
            isTurn: false,
            params: {
                Roads: 1,
                Villages: 1,
                Cities: 2,
                Warriors: 4
            }
        }, {
            id: 4,
            name: 'Claire Larsen',
            tag: 'newcomer',
            isTurn: false,
            params: {
                Roads: 6,
                Villages: 1,
                Cities: 0,
                Warriors: 2
            }
        }
    ],
    rounds: 0,
    turns: 0,
    currentPlayer: 0,
    nextPlayer: 1
}

export let userReducer = (state = defaultVal, action) => {
    switch (action.type) {
        case CHANGE_TURN:
            {
                if (state.nextPlayer === state.users.length-1) {
                    state.currentPlayer ++
                    state.nextPlayer = 0
                    state.turns++
                } else if (state.currentPlayer === state.users.length-1){
                    state.currentPlayer = 0
                    state.nextPlayer++
                    state.rounds++
                    state.turns++
                } else {
                    state.currentPlayer++
                    state.nextPlayer++
                    
                    state.turns++
                }

                return {...state};
            }
            break;
        case INCREMENT_PARAM:
            {
                state.users[state.currentPlayer].params[action.parameterIndex] ++
                return _.cloneDeep(state);
            }
            break;
        case DECREMENT_PARAM:
            {
                if (state.users[state.currentPlayer].params[action.parameterIndex] !== 0) {
                    state.users[state.currentPlayer].params[action.parameterIndex] --
                }
                return _.cloneDeep(state);
            }
            break;
        default:
            {
                console.log(
                    '%cAction Error: Such action doesn\'t exist or no action applied',
                    'background: #222; color: #bada55'
                );
                return state;
            }
            break;
    }
}

export const changeTurnAC = () => ({type: CHANGE_TURN, data: ''})
export const incrementParamAC = (parameterIndex) => ({type: INCREMENT_PARAM, parameterIndex: parameterIndex})
export const decrementParamAC = (parameterIndex) => ({type: DECREMENT_PARAM, parameterIndex: parameterIndex})