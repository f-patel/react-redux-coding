import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import rootReducers from "./reducers"

const middleware = applyMiddleware(thunk, logger);
const configStore = createStore(rootReducers, middleware); 

export default configStore;