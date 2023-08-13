import React from "react";
import "./Favorite.css";
import { selectFav } from "../../redux/slice/favSlice";
import { useSelector } from "react-redux";
import { MdFavorite, MdMeetingRoom } from "react-icons/md";
import logo from "../../assets/real-estate3.jpeg";
import { GrFavorite } from "react-icons/gr";
import { BsFillHouseAddFill } from "react-icons/bs";
import { FaBath } from "react-icons/fa";



const Favorite = () => {
  const faves = useSelector(selectFav);
  console.log(faves);
  return (
    <div className="fav-ctn layout">
      <div className="">
        {faves.length === 0 ? (
          <p className="empty"> No flat(s) is in your wishlist currently...</p>
        ) : (
          <div className="favorite">
            {faves.map((item) => {
              return (
                <div className="fav-content" key={item.id}>
                  <div className="pty-wrap">
                    <img src={item.imageURL} width={333} height={242} alt="" />
                    <div className="wishlist-favIcon">
                      <MdFavorite color=" #FF8551" size={33} />
                    </div>

                    <p className="pty-price">{item.price}FT</p>
                  </div>
                  <div className="pty-bottom">
                    <h3>{item.title}</h3>
                    <p>{item.location}</p>
                    <div className="pty-bottom-box">
                      <p>
                        <MdMeetingRoom /> <span>{item.rooms} Room(s)</span>
                      </p>
                      <p>
                        <FaBath />
                        <span> {item.bath} Bath(s)</span>
                      </p>
                      <p>
                        <BsFillHouseAddFill />
                        <span>
                          {item.area}m<sup>3</sup>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Favorite;
