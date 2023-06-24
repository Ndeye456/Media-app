 import { useContext } from "react";
import Home from "./page/home/Home";
import Login from "./page/login/Login";
import Profile from "./page/profile/Profile";
import Register from "./page/register/Register";
// import PersonSharpIcon from '@material-ui/icons/PersonSharp';
import {
  BrowserRouter,  
  Route,
  Routes,
} from 'react-router-dom'
import { AuthContext } from "./context/AuthContext";
import Messenger from "./page/messenger/Messenger";


function App() {
  // const navigate = useNavigate();
  const {user} = useContext(AuthContext)
  return (
    <BrowserRouter>
    <Routes>     
        <Route path="/" element={user ? <Home/> : <Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={ <Register/>}/>
        <Route path="/message" element={ <Messenger/>}/>
        <Route path="/profile/:username" element={<Profile/>}/>  
    </Routes>
    </BrowserRouter>
  )
  }
export default App;
