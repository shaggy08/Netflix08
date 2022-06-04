import React, { useEffect, useState } from "react";

import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SearchIcon from "@mui/icons-material/Search";

import "./Nav.css";

function Nav() {
  const [show, handleshow] = useState(false);
  function handle() {
    if (window.scrollY > 100) {
      handleshow(true);
    } else {
      handleshow(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handle);
    return () => {
      window.removeEventListener("scroll", handle);
    };
  }, []);
  //console.log(show);

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <div className="container">
        <div className="left">
          <img
            className="nav_logo"
            src="http://www.freepnglogos.com/uploads/netflix-logo-0.png"
            alt="NETFLIX"
          />
          <ul className="left_list">
            <li className="li_lest">Home</li>
            <li className="li_lest">Series</li>
            <li className="li_lest">Movies</li>
            <li className="li_lest">New and Popular</li>
            <li className="li_lest">My List </li>
          </ul>
          {/* <span>Home</span>
        <span >Series</span>
        <span >Movies</span>
        <span>New and Popular</span>
          <span>My List</span> */}
        </div>
        <div className="right">
          <ul className="right_list">
            <li className="li_right">
              {" "}
              <SearchIcon />{" "}
            </li>
            <li className="li_right child"> Children</li>
            <li className="li_right">
              {" "}
              <NotificationsIcon />{" "}
            </li>
            <li className="li_right avt ">
              {" "}
              <img
                className="nav_avatar"
                src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                alt="AVATAR"
              />
            </li>
          </ul>
          {/* <Search  />
      <span id="child">Children</span>
      <Notifications className="icon" /> */}
          {/* <img
        className="nav_avatar"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt="AVATAR"
      /> */}
          <div className="profile arrow">
            <ArrowDropDownIcon className="icon arrow" />
            <div className="options ">
              <span>profile 1</span>
              <span>profile 2</span>
              <span>profile 3</span>
              <hr></hr>
              <span>Settings1</span>
              <span>Settings2</span>
              <hr></hr>
              <span>Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
