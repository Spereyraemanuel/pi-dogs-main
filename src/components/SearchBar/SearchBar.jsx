import React, { useState } from 'react'
import { useDispatch } from "react-redux";
import {getDogsByName, AddDogs } from "../../redux/actions"

export default function SearchBar() {
   const [input, setInput] = useState("");
   const dispatch = useDispatch();

  const searchHandler = (event) => {
    const {value} = event.target
    if(value){
      dispatch(getDogsByName(value))
    }else {
      dispatch(AddDogs())
    }
  }

  const hablderInput = (event) => {
    if(!event.target.value){
    dispatch(AddDogs());
    setInput("")
    }else {
      setInput(event.target.value)
    }
  }


  const handleKeyPress = (event) => {
    if(event.key === "Enter") {
      searchHandler(event)
    }
  }

  return (
    <div>
        <input type="text" name='search' placeholder='Mascotas' value={input} onChange={hablderInput} onKeyDown={handleKeyPress} />
         <button onClick={searchHandler} value={input}>Buscar</button>
    </div>
  )
}
