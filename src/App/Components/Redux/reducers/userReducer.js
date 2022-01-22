let defaultVal = {
    users: [
        {
            id: 1,
            name: 'George Mills',
            tag: false,
            isTurn: false,
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
            isTurn: true,
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

export const userReducer = (store = defaultVal, action) => {
    return store;
}