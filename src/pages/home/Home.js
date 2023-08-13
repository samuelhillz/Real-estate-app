import React from "react";
import "./Home.css";
import AdminOnlyRoute from "../../components/header/adminOnlyRoute/AdminOnlyRoute";
import banner from "../../assets/baner.jpg";
import banner1 from "../../assets/condo1.jpeg";
import banner2 from "../../assets/condo2.jpeg";
import banner3 from "../../assets/condo3.jpeg";
import banner4 from "../../assets/condo4.jpeg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-container">
      <div className="banner-box">
        <div
          className="banner"
          style={{
            backgroundImage: `url(${banner})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% 85%",
          }}
        ></div>
      </div>
      <div className="featurred-proprty-box">
        <h2>Featured Properties</h2>
        <div className="featured-property">
          <div className="each-featured">
            <img src={banner1} alt="" />
            <div className="each-details">
              <p>500,000 Huf</p>
              <p>Miskolc</p>
              <p> 5 Beds | 2Baths</p>
            </div>
          </div>
          <div className="each-featured">
            <img src={banner2} alt="" />
            <div className="each-details">
              <p>2,500,000 Huf</p>
              <p>Miskolc</p>
              <p> 5 Beds | 3 Baths</p>
            </div>
          </div>
          <div className="each-featured">
            <img src={banner3} alt="" />
            <div className="each-details">
              <p>2,100,000 Huf</p>
              <p>Szeged</p>
              <p> 3 Beds | 1 Baths</p>
            </div>
          </div>
          <div className="each-featured">
            <img src={banner4} alt="" />
            <div className="each-details">
              <p>1,500,000 Huf</p>
              <p>Budapest</p>
              <p> 2 Beds | 2 Baths</p>
            </div>
          </div>
        </div>
        <Link style={{textDecoration:'none'}} to='/properties'>
          
          <p className="view-all">View All</p>
        </Link>
      </div>
      <div className="agent">
        <div className="agent-box agent-layout">
          <h1>
            Our trusted agents can help you navigate the sales and rent proccess
            of getting your desired home.
          </h1>
          <p>
            The decision to sell or rent a home is a big one. Wthether this will
            be your first time on dealing with real estate process or you've
            done it several times before, we would love to assist you with the
            sale of your home. Our trusted agents can help you navigate the
            processes and help answer any question you may have.
          </p>
          <button> FIND OUT MORE</button>
        </div>
      </div>
      <div className="contact-wrapper">
        <div className="contact-us">
          <h1>Contact us</h1>
          <div className="contact-form">
            <div className="contact-box">
              <label> First Name:</label>
              <input type="text" placeholder="First Name" />
            </div>
            <div className="contact-box">
              <label> Last Name:</label>
              <input type="text" placeholder="Last Name" />
            </div>
            <div className="contact-box">
              <label> Email:</label>
              <input type="email" placeholder="Email" />
            </div>
            <div className="contact-box-info">
              <div className="contact-box">
                <label> Phone:</label>
                <input type="number" placeholder="Phone" />
              </div>

              <div className="contact-box">
                <label> Type:</label>
                <input type="text" placeholder="eg cell, work" />
              </div>
            </div>
            <div className="contact-box">
              <label>Questions/Comments:</label>
              <textarea
                placeholder="Write your comments or questions here..."
                cols="30"
                rows="10"
              ></textarea>
            </div>
            <button className="contacts-btn">Submit</button>
          </div>
        </div>
      </div>
      {/* <AdminOnlyRoute /> */}
    </div>
  );
};

export default Home;
