import React, { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Button } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import Person2Icon from '@mui/icons-material/Person2';
import { Api } from "./globalApi";
export const UserList = () => {
  const [userList, setUserList]=useState([])


  useEffect(()=>{
    const getAllUsers= async ()=>{
      try{
        const res=await axios.get(`${Api}/users`)
          setUserList(res.data)
      }catch(err){
        console.log(err)
      }
    
    }
    getAllUsers()
  },[])


  return (
    <div className="cardscontainer">
      {userList.map((e,i) => (
        <UserCard
          name={e.name}
          email={e.email}
          image={e.image}
          key={i}
          id={e._id}
         
        />
      ))}
    </div>
  );
};

export const UserCard = ({ name, email, image, id}) => {
  const navigate = useNavigate();
const deleteuser=()=>{
  axios.delete(`${Api}/delete/${id}`)
}
  return (
    <div className="container">
      <div style={{boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",padding:"10px"}}>
      <div className="profileContainer">
        <div className="detailContainer">
          <h3>NAME</h3>
          <h4>{name}</h4>
          <h3>Email</h3>
          <h4>{email}</h4>
        </div>
        <div className="imageContainer">
          <img className="img" src={image} alt="" />
        </div>
      </div>
      <div className="buttonContainer">
        <Button variant="contained" style={{marginRight:"20px"}} onClick={() => navigate(`/edit-user/${id}`)}> <EditIcon/> Edit user</Button>
        <Button variant="contained" style={{marginRight:"20px"}} onClick={() => navigate(`/profile/${id}`)}>  <Person2Icon/> Profile</Button>
        <Button variant="contained" onClick={deleteuser} >  <Person2Icon/> Delete </Button>
        
      </div>
      </div>
    </div>
  );
};
