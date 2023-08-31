import { useContext, useEffect, useState } from "react";
import "./comments.css";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
// import { format } from "timeago.js"

const Comments = ({postId}) => {
  const { user } = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  // const [desc, setDesc] = useState("");
  const [newComment, setNewComment] = useState('');
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get(
        "http://localhost:8800/api/commentaires"
      );
      setComments(data);
    };
    fetchProducts();
  }, []);

 
  const handleClick = async (e) => {
    // e.preventDefault();
    const user = JSON.parse(localStorage.getItem('user'))

    const data = {
      userId: user._id,
      newComment: newComment,
      postId:postId
      
    }
    
    try {
      const response = await axios.post(`http://localhost:8800/api/commentaires`,  data );
      console.log('New comment added:', response.data);
    } catch (error) {
      console.error('Error adding comment:', error);
    }
    
  };

  // const date = 
  //   if (response.ok) {
  //     // Mettre à jour les commentaires localement
  //     const newCommentData =  response.json();
  //     setComments([...comments, newCommentData]);
  //     setNewComment('');
  //   }
  // };

 
  return (
    <div className="comments">
      <div className="write">
        <img
          className="img1"
          src={
            user.profilePicture
              ? PF + user.profilePicture
              : PF + "person/noAvatar.png"
          }
          alt=""
        />
        <input
          className="input1"
          type="text"
          placeholder="write a comment"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <button className="button1" onClick={handleClick}>
          Send
        </button>
      </div>
      {comments
      .filter(c=> c.postId=== postId)
      .map((comment) => (
        <div className="comment">
          <img
            className="img1"
            src={
              user.profilePicture
                ? PF + user.profilePicture
                : PF + "person/noAvatar.png"
            }
            alt=""
          />
          <div className="info">
            <span>{comment.username}</span>
            <p>{comment.desc}</p>
          </div>
          <span className="date">{comment.createdAt}</span>
        </div>
      ))}
    </div>
  );
};

export default Comments;
