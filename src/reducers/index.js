import { combineReducers } from "redux";
import movieDetailsReducer from "./moviesReducers";

const rootReducers = combineReducers({
	moviesList: movieDetailsReducer
})

export default rootReducers;