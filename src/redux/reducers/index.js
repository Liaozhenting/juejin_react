import {combineReducers} from "redux";

const contentReducer = (state, action)=> {
    if(!state) {
        return {
            
        }
    }
    switch(action.type) {
        case "UPDATE_CONTENT":
            return {
                ...state,
                conetnt: action.content
            }
        default:
            return state;
    }
}
let rootReducer = combineReducers(
    {
        contentReducer
    }
);
export default rootReducer;