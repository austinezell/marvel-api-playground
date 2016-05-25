import {combineReducers} from "redux";

function charReducer(state= {
  isGetting: false,
  characters: []
}, action) {
  switch(action.type){
    case "GOT_CHARACTERS": {
      return Object.assign({}, state, {
        characters: action.characters
      })
    }
    default: {
      return state;
    }
  }
}

const rootReducer = combineReducers({
  charReducer
})



export default charReducer
