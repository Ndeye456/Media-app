import React, { useContext } from "react";
import "./topbar.css";
import {User, Search} from 'lucide-react'
// import SearchSharpIcon from "@material-ui/icons/SearchSharp";
// import PersonSharpIcon from "@material-ui/icons/PersonSharp";
// import ChatSharpIcon from "@material-ui/icons/ChatSharp";
// import NotificationsSharpIcon from "@material-ui/icons/NotificationsSharp";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

export default function Topbar() {
  const { user } = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">Reseau Social</span>
        </Link>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          {/* <SearchSharpIcon className="searchIcon" /> */}
          <Search className="searchIcon" />
          <input
            placeholder="search for frien, post or video"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">Homepage</span>
          <span className="topbarLink">Timeline</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            {/* <PersonSharpIcon /> */}
            Icon goes here
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            {/* <ChatSharpIcon /> */}
            Icon goes here
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
            {/* <NotificationsSharpIcon /> */}
            Icon goes here
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <Link to={`/profile/${user.username}`}>
        <img
          src={
            user.profilePicture
              ? PF + user.profilePicture
              : PF + "person/noAvatar.png"
          }
          alt=""
          className="topbarImg"
        />
        </Link>
      </div>
    </div>
  );
}
