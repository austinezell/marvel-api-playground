import {combineReducers} from "redux";

function charReducer(state, action) {
  switch(action.type){
    case "GET_CHARACTERS": {

    }
    default: {
      return state;
    }
  }
}

const rootReducer = combineReducers({
  charReducer
})


export default rootReducer
