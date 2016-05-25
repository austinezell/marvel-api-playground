import {get} from "jquery";

export const GOT_CHARACTERS = "GOT_CHARACTERS";

function gotCharacters(data){
  return {
    type: GOT_CHARACTERS,
    characters: data
  }
}

export function fetchCharacters(){
  return dispatch => {
    return get("/api/test")
    .then(res=>dispatch(gotCharacters(res.data.results)))

  }
}
