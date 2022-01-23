const CHANGE_TURN = 'CHANGE_TURN';

let defaultVal = {
    users: [
        {
            id: 1,
            name: 'George Mills',
            tag: false,
            isTurn: true,
            params: {
                hp: 32,
                gold: 24,
                deaths: 4
            }
        }, {
            id: 2,
            name: 'Jennifer Carpenter',
            tag: false,
            isTurn: false,
            params: {
                hp: 44,
                gold: 404,
                deaths: 1
            }
        }, {
            id: 3,
            name: 'Bill',
            tag: 'newcomer',
            isTurn: false,
            params: {
                hp: 24,
                gold: 2654,
                deaths: 2
            }
        }, {
            id: 4,
            name: 'Claire Larsen',
            tag: 'newcomer',
            isTurn: false,
            params: {
                hp: 12,
                gold: 234,
                deaths: 0
            }
        }
    ],
    rounds: 0,
    turns: 0,
}

export let userReducer = (state = defaultVal, action) => {
    switch (action.type) {
        case CHANGE_TURN:
            {
                let arrIndex = state
                    .users
                    .findIndex(x => x.isTurn === true);

                if (arrIndex < state.users.length-1) {
                    state
                        .users[arrIndex]
                        .isTurn = false;
                    state
                        .users[arrIndex + 1]
                        .isTurn = true;
                    state.turns++
                } else {
                    state
                        .users[arrIndex]
                        .isTurn = false;
                    state.users[0].isTurn = true;
                    state.turns++
                    state.rounds++
                }

                return state;
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

export const changeTurnCreator = () => ({type: CHANGE_TURN, data: ''})