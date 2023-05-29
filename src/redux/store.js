import {createStore, applyMiddleware, compose} from "redux"
import reducer from "./reducer";
import thunkMiddleWare from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducer,
    composeEnhancers(applyMiddleware(thunkMiddleWare))
    )

export default store