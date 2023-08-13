import React from "react";
import "./Fav.css";
import { selectFav } from '../../redux/slice/favSlice'
import { useSelector } from "react-redux";

const Fav = () => {
 const favorites = useSelector(selectFav)
 console.log(favorites)


  return (
    <div>
      {favorites.map((item) => {
        const {status,location}= item
        console.log(item);
      })}
    </div>
  );
};

export default Fav;
