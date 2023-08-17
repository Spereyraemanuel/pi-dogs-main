import React from "react";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { AddDogs } from "../../redux/actions";
import { useSelector } from "react-redux";
import Dogs from "../Dogs/Dogs";


const DogsContainer = () => {
  const urlBase = "https://cdn2.thedogapi.com/images/"
  const infoDogs = useSelector((state) => state.myDogs);
  
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(AddDogs());
  }, [dispatch]);


  return (
    <div>
      {infoDogs.map((dog) => {
     if (dog.imagen) {
      const imageUrl = urlBase + dog.imagen.replace(/"/g, "") + ".jpg";
      return (
        <Dogs
        key={dog.id}
        id={dog.id}
        imagen={imageUrl}
        name={dog.nombre}
        altura={dog.altura}
        />
        );
      }
      })}
      <div>
      </div>
    </div>
  );
};

export default DogsContainer;
