import React from 'react';
import DogsContainer from '../../components/DogsContainer/DogsContainer';
import NavBar from '../../components/NavBar/NavBar';
import style from "./Home.module.css"


export default function Home() {

  return (
    <div className={style.home}>
      <NavBar />
      <h1>Home</h1>
      <DogsContainer />
    </div>
  );
}
