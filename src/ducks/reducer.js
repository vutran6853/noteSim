// inital value
const NAME = 'NAME';


const initialState = {
  name: ''
}

export function updateName(name) {
  return {
    type: NAME,
    payload: name
  }
};

function reducer(state = initialState, action) {
  switch(action.type) {
    case NAME:
    return {
      ...state,
      name: action.payload
    }
    default: 
    return state;
  }
}

export default reducer;