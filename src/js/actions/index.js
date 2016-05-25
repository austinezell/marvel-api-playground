export const REQUEST_CHARACTERS = "REQUEST_CHARACTERS";
export const RECEIVE_CHARACTERS = "RECEIVE_CHARACTERS";


export function getCharacters(name, amount, offset){
  return {
    type: "GET_CHARACTERS", name, amount, offset
  }
}
