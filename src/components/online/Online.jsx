// import {  useEffect, useState } from 'react';
// // import { AuthContext } from '../../context/AuthContext';
// import './online.css'
// import axios from 'axios';
// import { useParams } from "react-router";

// export default function Online(){
// // const { user } = useContext(AuthContext);
//  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
// const [users, setUser] = useState([]);
// //const username = useParams().username;

// useEffect(() => {
//   axios.get(`http://localhost:8800/api/users`)
//   .then((res)=>{
//     setUser(res.data);
//     //console.log(users.length);
//   })
//   .catch((err)=>{
//     console.log(err)
//   })

    
// }, []);
// // console.log(user);


//   return (
//     <>
//     {
//       users.map((user)=>{
//         return (
//           <li className="rightbarFriend">
//           <div className="rightbarProfileImgContainer">
//             <img className="rightbarProfileImg" src={
//             user.profilePicture
//               ? PF + user.profilePicture
//               : PF + "person/noAvatar.png"
//           } alt=""/>
//             <span className="rightbarOnline"></span>
//           </div>
//           <span className="rightbarUsername">{user.username}</span>
//         </li>

      
//         )
//       })
//     }
    
//       </>
    
//   )
// }
