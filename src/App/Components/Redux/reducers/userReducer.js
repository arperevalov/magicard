const CHANGE_TURN = 'CHANGE_TURN';

let defaultVal = {
    users: [
        {
            id: 1,
            name: 'George Mills',
            tag: false,
            isTurn: true,
            params: {
                hp: 1234,
                gold: 24,
                deaths: 2
            }
        },
        {
            id: 2,
            name: 'Jennifer Carpenter',
            tag: false,
            isTurn: false,
            params: {
                hp: 1234,
                gold: 404,
                deaths: 2
            }
        },
        {
            id: 3,
            name: 'Bill',
            tag: 'newcomer',
            isTurn: false,
            params: {
                hp: 1234,
                gold: 2654,
                deaths: 2
            }
        },
        {
            id: 4,
            name: 'Claire Larsen',
            tag: 'newcomer',
            isTurn: false,
            params: {
                hp: 1234,
                gold: 234,
                deaths: 2
            }
        }
    ]
}

export const userReducer = (state = defaultVal, action) => {
    switch (action.type){
        case  CHANGE_TURN :
            {
                
                let next = state.users.find(item => item.isTurn = true);
                debugger

                let arrIndex = state.users.findIndex(next);

                console.log(arrIndex)
                next.isTurn = false
                state.users[arrIndex+1].isTurn = true            
                return state
            }
            break;
        default :
            {
                console.log('%cAction Error: Such action doesn\'t exist or no action applied', 'background: #222; color: #bada55');
                return state;
            }
            break;
    }
}

export const changeTurnCreator = () => ({type: CHANGE_TURN, data: ''})