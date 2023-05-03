import '@fontsource/public-sans';
import './App.css';
import {Routes,Route, useNavigate, Navigate} from "react-router-dom"
import { UserList } from './Listuser';
import { Adduser } from './Adduser';
import { EditUser } from './EditUser';
import { Profile } from './Profile';
import { EditProfile } from './EditProfile';
import { Userstate } from './context/Userstate';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/joy/Button';
function App() {
  const navigate=useNavigate()
  return (
 <div>
  <Userstate>
  <AppBar position="static">
    <Toolbar>

    
  <Button onClick={()=> navigate("/users")} >ALL users</Button>
  <Button onClick={()=> navigate("/create-user")} >CREATE New</Button>
  </Toolbar>
     </AppBar>


   <Routes>
   <Route path="/"element={<Navigate replace to="/users"/>} />
    <Route path="/users" element={<UserList/>} />
    <Route path='/create-user' element={<Adduser/>} />
    <Route path='/edit-user/:id' element={<EditUser/>} />
    <Route path='/profile/:id' element={<Profile/>} />
    <Route path='/edit-profile/:id' element={<EditProfile/>} />
   </Routes>
   </Userstate>
   </div>


  );
}

export default App;
