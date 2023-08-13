import React, { useEffect, useState } from "react";
import "./Header.css";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../firebase/config";
import { toast } from "react-toastify";
import { BsFillFilePersonFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { removeActiveUser, setActiveUser } from "../../redux/slice/authSlice";
import Showlogin, { ShowlogOut } from "./hiddenLinks/HiddenLink";
import AdminOnlyRoute from "./adminOnlyRoute/AdminOnlyRoute";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { GrFavorite } from "react-icons/gr";
import fav from '../../assets/wishlist_logo.png'
import logo from '../../assets/real-estate3.jpeg'


const Header = () => {
  const [menu, setMenu] = useState(false);
  const [displayName, setDisplayName] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const toogle = () => {
    setMenu(!menu);
  };

  const setToogle = () => {
    setMenu(false);
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        if (user.displayName == null) {
          const u1 = user.email.substring(0, user.email.indexOf("@"));
          const uName = u1.charAt(0).toUpperCase() + u1.slice(1);

          setDisplayName(uName);
        } else {
          setDisplayName(user.displayName);
        }

        dispatch(
          setActiveUser({
            email: user.email,
            userName: user.displayName ? user.displayName : displayName,
            userId: user.uid,
          })
        );
      } else {
        setDisplayName("");
        dispatch(removeActiveUser());
      }
    });
  }, [dispatch, displayName]);

  const logOut = () => {
    signOut(auth)
      .then(() => {
        toast.info("You have been signed out");
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  return (
    <nav>
      <div className="nav">
        <div className="navbar">
          <Link to='/'>
            <div className="logo">
              <img src={logo} width={122} height={90} />
            </div>
          </Link>
          <div
            onClick={setToogle}
            className="nav-menu"
            id={menu ? "mobile" : "hidden"}
          >
            <div className="">
              <ul className="nav-links">
                <li>
                  <NavLink to="/admin">
                    <AdminOnlyRoute>
                      <button className="adminHover" Link to="/admin">
                        Admin
                      </button>
                    </AdminOnlyRoute>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="admin-Hover"
                    style={{ textDecoration: "none", color: "black" }}
                    Link
                    to="/"
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="admin-Hover"
                    style={{ textDecoration: "none", color: "black" }}
                    to="/properties"
                  >
                    Properties
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="admin-Hover"
                    style={{ textDecoration: "none", color: "black" }}
                    to="services"
                  >
                    Services
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="nav-right">
              <ul className="nav-links">
                <ShowlogOut>
                  <li className="sign-in-shift">
                    <NavLink
                      style={{ textDecoration: "none", color: "black" }}
                      to={"/signin"}
                    >
                      Sign in
                    </NavLink>
                  </li>
                </ShowlogOut>
                <Showlogin>
                  <li style={{ textDecoration: "none" }}>
                    <BsFillFilePersonFill
                      className="profile"
                      size={19}
                      color="#FF8551"
                    />
                    Hi, {displayName}
                  </li>
                </Showlogin>

                <li>
                  <Showlogin>
                    <NavLink
                      style={{ textDecoration: "none", color: "black" }}
                      to={"/"}
                      onClick={logOut}
                    >
                      Sign Out
                    </NavLink>
                  </Showlogin>
                </li>
                <li>
                  <Link style={{ textDecoration: "none" }} to={"favorite"}>
                    {/* <GrFavorite color="red" size={20} /> */}
                    <img src={fav} width={90} alt="" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div onClick={toogle} className="nav-icon">
            {menu ? <AiOutlineClose size={23} /> : <AiOutlineMenu size={23} />}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
