import React from 'react'
import SearchBar from '../SearchBar/SearchBar'
import style from "./NavBar.module.css"

export default function NavBar() {
  return (
    <div>
        <button class={style.button-17} role="button">Button 17</button>
        <button classname={style.button17}>Logo</button>
        <button classname={style.button17}>Exit</button>
        <SearchBar /> 
    </div>
  )
}
