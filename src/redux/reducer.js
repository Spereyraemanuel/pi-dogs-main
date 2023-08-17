import {
    GET_DOGS,
    GET_DOGS_BY_NAME,
} from "./actions-types"

const initialState = {
    myDogs: [],
}


const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DOGS:
        return {
            ...state,
            myDogs: action.payload
        };
        case GET_DOGS_BY_NAME:
            return {
                ...state,
                myDogs: action.payload,
            }
        default: 
        return { ...state};
  }
}

export default rootReducer;