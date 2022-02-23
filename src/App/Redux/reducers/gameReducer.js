import _ from "lodash";

const CHANGE_TURN = 'CHANGE_TURN',
INCREMENT_PARAM = 'INCREMENT_PARAM',
DECREMENT_PARAM = 'DECREMENT_PARAM',
CHANGE_PARAM = 'CHANGE_PARAM',
CHANGE_GAME_NAME = 'CHANGE_GAME_NAME',
CHANGE_PIECE = 'CHANGE_PIECE',
CHANGE_USER_NAME_FIELD = 'CHANGE_USER_NAME_FIELD',
CREATE_USER = 'CREATE_USER'

let defaultVal = {
    settings:{
        name: '',
        pieces: [],
        newUserValue: '',
    },
    users: [
    ],
    rounds: 0,
    turns: 0,
    currentPlayer: 0,
    nextPlayer: 1
}

export let gameReducer = (state = defaultVal, action) => {
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
        case CHANGE_PARAM:
            {
                if(action.value.length == 0) {
                    state.users[state.currentPlayer].params[action.parameterIndex] = 0
                } else {
                    state.users[state.currentPlayer].params[action.parameterIndex] = parseInt(action.value)
                };
                return _.cloneDeep(state);
            }
            break;
        case CHANGE_GAME_NAME:
            {
                state.settings.name = action.value;

                return {...state,
                settings: {...state.settings}}
            }
            break;
        case CHANGE_PIECE:
            {
                //REFACTOR
                if(action.value) {
                    state.settings.pieces.push(action.name)
                } else if(!action.value) {
                    state.settings.pieces.splice(state.settings.pieces.indexOf(action.name), 1)
                }

                return {...state,
                settings: {...state.settings}}
            }
            break;
        case CHANGE_USER_NAME_FIELD:
            {
                state.settings.newUserValue = action.value;

                return {...state,
                settings: {...state.settings}}
            }
            break;
        case CREATE_USER:
            {
                let newUser = {
                    id: state.users.length+1,
                    name: state.settings.newUserValue,
                    tag: false,
                    params: {
                        roads: 0,
                        villages: 0,
                        cities: 0,
                        warriors: 0
                    }
                }
                state.users.push(newUser)
                state.settings.newUserValue = ''
                
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
export const changeParamAC = (value, parameterIndex) => ({type: CHANGE_PARAM, value:value, parameterIndex:parameterIndex})
export const changeGameNameValueAC = (value) => ({type: CHANGE_GAME_NAME, value:value})
export const changePieceAC = (name, value) => ({type: CHANGE_PIECE, name: name, value:value})
export const createUserAC = (name) => ({type: CREATE_USER, name: name})
export const changeNewUserValueAC = (value) => ({type: CHANGE_USER_NAME_FIELD, value:value})