import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Usercontext } from "./context/Usercontext";
import { Button } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import Person2Icon from '@mui/icons-material/Person2';
export const UserList = () => {
  const a = useContext(Usercontext);
  const users = a.userList;


  return (
    <div className="cardscontainer">
      {users.map((e,i) => (
        <UserCard
          name={e.name}
          email={e.email}
          src={e.src}
          key={i}
          id={e.id}
         
        />
      ))}
    </div>
  );
};

export const UserCard = ({ name, email, src, id}) => {
  const navigate = useNavigate();
  const a=useContext(Usercontext)
  const userList=a.userList
  const seruserlist=a.setUSerList
  let copyuselist=[...userList]
const deleteuser=()=>{
 copyuselist.splice(id-1,1)

 seruserlist(copyuselist)
}
  return (
    <div className="container">
      <div className="profileContainer">
        <div className="detailContainer">
          <h3>NAME</h3>
          <h4>{name}</h4>
          <h3>Email</h3>
          <h4>{email}</h4>
        </div>
        <div className="imageContainer">
          <img className="img" src={src} alt="" />
        </div>
      </div>
      <div className="buttonContainer">
        <Button variant="contained" style={{marginRight:"20px"}} onClick={() => navigate(`/edit-user/${id}`)}> <EditIcon/> Edit user</Button>
        <Button variant="contained" style={{marginRight:"20px"}} onClick={() => navigate(`/profile/${id}`)}>  <Person2Icon/> Profile</Button>
        <Button variant="contained" onClick={deleteuser} >  <Person2Icon/> Delete </Button>
        
      </div>
    </div>
  );
};
