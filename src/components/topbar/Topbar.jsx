import React, { useContext } from "react";
import "./topbar.css";
// import SearchSharpIcon from "@material-ui/icons/SearchSharp";
// import PersonSharpIcon from "@material-ui/icons/PersonSharp";
// import ChatSharpIcon from "@material-ui/icons/ChatSharp";
// import NotificationsSharpIcon from "@material-ui/icons/NotificationsSharp";
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

export default function Topbar() {
  const { user } = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const state = useSelector((state)=> state.addMess)
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
          <SearchIcon className="searchIcon" />
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
            <PersonIcon />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            {/* <ChatSharpIcon /> */}
            <Link to="/message" style={{ color: "white"}}>
            <ChatIcon />
            <span className="topbarIconBadge">{state.length}</span>
            </Link>
          </div>
          <div className="topbarIconItem">
            {/* <NotificationsSharpIcon /> */}
            <NotificationsIcon />
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
