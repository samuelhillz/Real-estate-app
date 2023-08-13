import React, { useEffect, useState } from "react";
import "./SingleProperties.css";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/config";
import { GrFavorite } from "react-icons/gr";
import { useDispatch } from "react-redux";
import { addToFav, selectFav } from "../../redux/slice/favSlice";
import { MdMeetingRoom } from "react-icons/md";
import { FaBath } from "react-icons/fa";
import { BsFillHouseAddFill, BsTelephone } from "react-icons/bs";
import { AiFillHome } from "react-icons/ai";

const SingleProperties = () => {
  const [flat, setFlat] = useState([]);
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    getFlat();
  }, []);

  const handleClick = (flat) => {
    dispatch(addToFav(flat));
  };

  const getFlat = async () => {
    const docRef = doc(db, "flats", id);

    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      const flatObj = {
        id: id,
        ...docSnap.data(),
      };

      setFlat(flatObj);
    } else {
      console.log("No such document!");
    }
  };

  return (
    <div className="product-details">
      <div className="prod-details-logo">
        <AiFillHome />
        <span className="prod-details-logo-title"> &rarr; Properties</span>
        <span> &rarr; {flat.title}</span>
      </div>
      <div className="interest">
        <div className="interest-left">
          <h2>Interested In This Property?</h2>
          <p>Get in touch with us today</p>
          <div className="interest-status">
            <div className="pty-bottom-box">
              <p>
                <MdMeetingRoom /> <span>{flat.rooms} Room(s)</span>
              </p>
              <p>
                <FaBath />
                <span> {flat.bath} Bath(s)</span>
              </p>
              <p>
                <BsFillHouseAddFill />
                <span>
                  {flat.area}m<sup>3</sup>
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="interest-right">
          <div className="fav">
            <div className="fav-icon">
              <button
                onClick={() => handleClick(flat)}
                className="add-to-wishlist"
              >
                <GrFavorite className="f-icon" size={30} />
                <p className="">Click here to add to wishlist</p>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="prod-details layout">
        <div className="details-left">
          <img src={flat.imageURL} alt="" />
        </div>
        <div>
          <div className="details-right">
            <h3>More about this property</h3>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                marginTop: "7px",
              }}
            >
              <BsTelephone size={20} />
              <p>{flat.agentNum}</p>
            </div>
            <div className="right-forms">
              <input
                className="input-forms"
                type="text"
                placeholder="Full Name"
              />
              <input className="input-forms" type="email" placeholder="Email" />
              <input
                className="input-forms"
                type="number"
                placeholder="Phone"
              />
              <input className="input-forms" type="date" />
              <textarea
                className="input-forms"
                placeholder={`Iam interested in ${flat.title}`}
                cols="30"
                rows="5"
              ></textarea>
              <button> Send</button>
            </div>
          </div>
        </div>
      </div>
      <div className="single-features">
        <h3>Property Features</h3>
        <p className="indiviual-title">{flat.title}</p>
        <p>${flat.price}</p>

        <p> Room(s): {flat.rooms}</p>
        <p>Bath(s): {flat.bath}</p>

        <p>Status: {flat.status}</p>
        <p>
          Area: {flat.area}m<sup>3</sup>
        </p>
        <p>Location:{flat.location}</p>
        <p>Agent Name: {flat.agentName}</p>
        <p>Agent Number: {flat.agentNum}</p>
        <p> Ref Number: {flat.refNum}</p>
      </div>

      <div className="desc layout">
        <h3>Property Description</h3>
        <div>{flat.desc}</div>
      </div>
    </div>
  );
};

export default SingleProperties;
