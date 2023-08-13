import React, { useEffect, useState } from "react";
import useFetchCollection from "../../customHook/useFetchCollection";
import { storeFlat } from "../../redux/slice/flatSlice";
import { useDispatch, useSelector } from "react-redux";
import { AiTwotoneHome } from "react-icons/ai";
import { selectSorted, sortProduct } from "../../redux/slice/filterSlice";
import "./Properties.css";
import { Link } from "react-router-dom";
import { GrFavorite } from "react-icons/gr";
import { addToFav } from "../../redux/slice/favSlice";
import property1 from "../../assets/properties.webp";
import { MdMeetingRoom } from "react-icons/md";
import { FaBath } from "react-icons/fa";
import { BsFillHouseAddFill } from "react-icons/bs";

const Properties = () => {
  const [status, setStatus] = useState("all");
  const [sort, setSort] = useState("all");
  const [city, setCity] = useState("");

  const { data } = useFetchCollection();
  const sortedData = useSelector(selectSorted);

  const dispatch = useDispatch();

  const filterprod = new Set(
    sortedData.map((item) => {
      return item.status;
    })
  );

  const allFiltered = ["All", ...filterprod];

  const filterCity = new Set(
    sortedData.map((item) => {
      return item.location;
    })
  );

  const allCity = ["All", ...filterCity];

  useEffect(() => {
    dispatch(sortProduct({ data, sort }));
  }, [dispatch, data, sort]);

  useEffect(() => {
    dispatch(storeFlat(data));
  }, [dispatch, data]);

  const handleFav = (flat) => {
    dispatch(addToFav(flat));
  };

  return (
    <section className="main-properties ">
      <div className="properties">
        <div className="properties-left">
          <div className="property-background">
            <img src={property1} />
            <h2>Our Properties</h2>
          </div>
          <div className="props layout ">
            <h3>PROPERTIES</h3>
            <div>
              <label>Sort by: </label>
              <select value={sort} onChange={(e) => setSort(e.target.value)}>
                <option value="all"> All</option>
                <option value="lowest-price"> lowest-price</option>
                <option value="highest-price"> Highest Price</option>
                <option value="room-lowest-to-highest">
                  Room - lowest to highest
                </option>
                <option value="room-highest-to-lowest">
                  Room - highest to lowest
                </option>
                <option value="size-lowest-to-highest">
                  Size - low to highest
                </option>
                <option value="size-highest-to-lowest">
                  Size - highest to lowest
                </option>
              </select>
            </div>
          </div>
          <div className="mapped-properties ">
            {sortedData.map((flat, index) => {
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
                    <Link to={`/singleproperties/${id}`}>
                      <img src={imageURL} width={333} height={242} alt="" />
                    </Link>
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
                    <div className="button">
                      <div onClick={() => handleFav(flat)} className="save">
                        <GrFavorite
                          className="favorite-icon"
                          color="white"
                          size={20}
                        />
                        <p>Save</p>
                      </div>
                      <Link style={{textDecoration:'none'}}
                        className="more-details"
                        to={`/singleproperties/${id}`}
                      >
                        <div >MORE DETAILS &rarr;</div>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Properties;
