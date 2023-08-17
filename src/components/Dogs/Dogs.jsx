import style from "./Dogs.module.css";


const dogs = ({id, name, altura, imagen}) => {
  
    return (
        <div className={style.container}>
        <div className={style.dogs}>
        <h4 className={style.CardName}>{id}</h4>
        <h5 className={style.CardName}>{name}</h5>
        <h5 className={style.CardName}>{altura}</h5>
        <img src={imagen} alt="perro" />
      </div>
      </div>
    )
}

export default dogs;