import axios from "axios";
import {
    GET_DOGS,
    GET_DOGS_BY_NAME,
} from "./actions-types"

 export const AddDogs = () => {
  return async function (dispatch) {
     const response = await axios.get("http://localhost:3001/dogs");
     const data = response.data;
     dispatch({type: GET_DOGS, payload: data})
   }; 
  };

  export const getDogsByName = (name) => {
    return async function (dispatch) {
    const response = await axios.get(`http://localhost:3001/dogs?name=${name}`);
    dispatch({type: GET_DOGS_BY_NAME, payload: response.data})
    }
  }