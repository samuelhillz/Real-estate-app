import React, { useEffect, useState } from "react";
import "./ViewProducts.css";
import { toast } from "react-toastify";
import { db, storage } from "../../../../firebase/config";
import {
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { AiTwotoneHome } from "react-icons/ai";
import { MdDeleteForever, MdMeetingRoom } from "react-icons/md";
import { deleteObject, ref } from "firebase/storage";
import { selectFlats, storeFlat } from "../../../../redux/slice/flatSlice";
import { useDispatch, useSelector } from "react-redux";
import useFetchCollection from "../../../../customHook/useFetchCollection";
import { GrFavorite } from "react-icons/gr";
import { BsFillHouseAddFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { FaBath } from "react-icons/fa";

const ViewProducts = () => {
  const { data } = useFetchCollection();
  console.log(data);
  const flats = useSelector(selectFlats);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      storeFlat({
        flats: data,
      })
    );
  }, [dispatch, data]);

  const deleteFlat = async (id, imageURL) => {
    try {
      await deleteDoc(doc(db, "flats", id));
      const storageRef = ref(storage, imageURL);
      await deleteObject(storageRef);
      toast.success("Product deleted successfully");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <section className="main-properties layout">
      {data.length === 0 ? (
        <p> No flats found</p>
      ) : (
        <div className="properties">
          <div className="properties-left">
            <div className="props">
              <h1>PROPERTIES</h1>
            </div>
            <div className="mapped-properties ">
              {data.map((flat, index) => {
                const {
                  desc,
                  id,
                  rooms,
                  agentName,
                  agentNum,
                  area,
                  bath,
                  price,
                  imageURL,
                  location,
                  refNum,
                  status,
                  title,
                } = flat;

                return (
                  <div className="flat-property" key={index}>
                    <div className="pty-wrap">
                      <div>
                        <img src={imageURL} width={333} height={242} alt="" />
                      </div>
                      <p className="pty-price">{price}FT</p>
                    </div>
                    <div className="pty-bottom">
                      <h3>{title}</h3>
                      <p>{location}</p>
                      <div className="pty-bottom-box">
                        <p>
                          <MdMeetingRoom /> <span>{rooms} Room(s)</span>
                        </p>
                        <p>
                          <FaBath />
                          <span> {bath} Bath(s)</span>
                        </p>
                        <p>
                          <BsFillHouseAddFill />
                          <span>
                            {area}m<sup>3</sup>
                          </span>
                        </p>
                      </div>
                      <div
                        onClick={() => deleteFlat(id, imageURL)}
                        className="delete-icon"
                      >
                        <MdDeleteForever size={20} color="red" />
                      </div>
                      
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ViewProducts;

// <div onClick={() => deleteFlat(id, imageURL)} className="delete-icon">
//   <MdDeleteForever />
// </div>;
