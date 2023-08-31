import "./share.css";
// import PermMediaSharp from "@material-ui/icons/PermMediaSharp";
import PermMediaSharp from "@mui/icons-material/PermMedia";
// import LabelSharp from "@mui/icons/LabelSharp";
import LabelSharp from "@mui/icons-material/Label";
// import RoomSharp from "@mui/icons/RoomSharp";
import RoomSharp from "@mui/icons-material/Room";
// import EmojiEmotionsSharp from "@mui/icons/EmojiEmotionsSharp";
import EmojiEmotionsSharp from "@mui/icons-material/EmojiEmotions";
import { useContext, useRef, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
// import {Cancel} from "@mui/icons";
import {Cancel} from "@mui/icons-material";


export default function Share() {
  const { user } = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const desc = useRef();
  const [file, setFile] = useState(null);

  const submitHandler = async (e) =>{
    e.preventDefault()
    const newPost = {
      userId: user._id,
      desc: desc.current.value,
    };
    if(file){
      const data = new FormData();
      const fileName = Date.now() + file.name;
      data.append("name", fileName);
      data.append("file", file);
      newPost.img = fileName;
      console.log(newPost);
      try {
        await axios.post("https://social-mediabackend.onrender.com/api/upload", data);
      } catch (err) {
        console.log(err);
      }
    }

    try {
     await axios.post("https://social-mediabackend.onrender.com/api/posts",newPost);
     window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img
            className="shareProfileImg"
            src={
              user.profilePicture
                ? PF + user.profilePicture
                : PF + "person/noAvatar.png"
            }
            alt=""
          />
          <input
            placeholder={"qu'est ce qui est dans votre esprit " + user.username + "? "}
            className="shareInput"
            ref={desc}
          />
        </div>
        <hr className="shareHr" />
        {file && (
          <div className="shareImgContainer">
            <img className="shareImg" src={URL.createObjectURL(file)} alt=""/>
            <Cancel className="shareCancelImg" onClick={() => setFile(null)} />
          </div>
        )}
        <form className="shareBottom" onSubmit={submitHandler}>
          <div className="shareOptions">
            <label htmlFor="file" className="shareOption">
              <PermMediaSharp htmlColor="tomato" className="shareIcon" />
              <span className="shareOptionText">Photo or Video</span>
              <input
              style={{ display: "none"}}
                type="file"
                id="file"
                accept=".png,.jpeg,.jpg"
                onChange={(e) => setFile(e.target.files[0])}
              />
            </label>
            <div className="shareOption">
              <LabelSharp htmlColor="blue" className="shareIcon" />
              <span className="shareOptionText">Tag</span>
            </div>
            <div className="shareOption">
              <RoomSharp htmlColor="green" className="shareIcon" />
              <span className="shareOptionText">Location</span>
            </div>
            <div className="shareOption">
              <EmojiEmotionsSharp htmlColor="goldenrod" className="shareIcon" />
              <span className="shareOptionText">FreeLings </span>
            </div>
          </div>
          <button className="shareButton" type="submit">Share</button>
        </form>
      </div>
    </div>
  );
}
