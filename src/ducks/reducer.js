// inital value
const NAME = 'NAME';
const ADDRESS = 'ADDRESS';
const CITY = 'CITY';
const STATE = 'STATE';
const ZIP = 'ZIP';
const IMG = 'IMG';
const MORTGAGE = 'MORTGAGE';
const RENT = 'RENT';


// INITIAL STATE
const initialState = {
  name: '',
  address: '',
  city: '',
  state: '',
  zip: '',
  img: '',
  mortgage: '',
  rent: ''
}

// ININTIAL ACTION FOR PAYLOAD
export function updateName(name) {
  return {   
    type: NAME,
    payload: name
  }
};

export function updateAddress(address) {
  return {
    type: ADDRESS,
    payload: address
  }
};

export function updateCity(city) {
  return {
    type: CITY,
    payload: city
  }
};

export function updateState(state) {
  return {
    type: STATE,
    payload: state
  }
};

export function updateZip(zip) {
  return {
    type: ZIP,
    payload: zip
  }
};

export function updateImg(img) {
  return {
    type: IMG,
    payload: img
  }
};

export function updateMorgage(mortgage) {
  return {
    type: MORTGAGE,
    payload: mortgage
  }
};

export function updateRent(rent) {
  return {
    type: RENT,
    payload: rent
  }
};


// ACTION FOR REDUCER 
function reducer(state = initialState, action) {
  switch(action.type) {
    
    case NAME:
    return {
      
      ...state,
      name: action.payload
    }
    case ADDRESS:
    return {
      ...state,
      address: action.payload
    }
    case CITY:
    return {
      ...state,
      city: action.payload
    }
    case STATE:
    return {
      ...state,
      state: action.payload
    }
    case ZIP:
    return {
      ...state,
      zip: action.payload
    }
    case IMG:
    return {
      ...state,
      img: action.payload
    }
    case MORTGAGE:
    return {
      ...state,
      mortgage: action.payload
    }
    case RENT:
    return {
      ...state,
      rent: action.payload
    }

    default: 
    return state;
  }
}

export default reducer;