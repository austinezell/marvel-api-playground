import {get} from "jquery";

export const GOT_CHARACTERS = "GOT_CHARACTERS";

function gotCharacters(data){
  return {
    type: GOT_CHARACTERS,
    characters: data
  }
}

export function fetchCharacters(name, amount){
  let url = `/api/${name ? name + "/" : ""}${amount ? amount : ""}`;
  return dispatch => {
    return get(url)
    .then(res=>dispatch(gotCharacters(res.data.results)))
  }
}
