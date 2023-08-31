import React from 'react'
import "./topbar.css";
import ChatIcon from '@mui/icons-material/Chat';
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Icon() {
    const state = useSelector((state)=> state.addMess)
  return (
    <div className="topbarContainer">
         <div className="topbarIcons">
      <div className="topbarIconItem">
            {/* <ChatSharpIcon /> */}
            <Link to="/message" style={{ color: "white"}}>
            <ChatIcon />
            <span className="topbarIconBadge">({state.length})</span>
            </Link>
            </div>
          </div>
    </div>
  )
}
