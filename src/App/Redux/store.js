import { combineReducers, createStore } from "redux";
import { gameReducer } from "./reducers/gameReducer";
import { gameSettingsReducer } from "./reducers/gameSettingsReducer";

let combine = combineReducers({
    GamePage: gameReducer,
    GameCreatorPage: gameSettingsReducer
})

export const store = createStore(combine)
