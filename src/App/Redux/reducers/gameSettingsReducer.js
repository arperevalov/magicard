let defaultVal = {
    availablePieces: ['Turner', 'Scoreboard', 'Player Status', 'Dice', 'Timer', 'Stopwatch', 'Helpers'],
}

export let gameSettingsReducer = (state = defaultVal, action) => {
    switch (action.type) {
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