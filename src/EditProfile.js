import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Input from "@mui/joy/Input";
import Button from '@mui/joy/Button';
import axios from "axios";
import { Api } from "./globalApi";

export const EditProfile = () => {
  const navigate = useNavigate();
  const [user,setUser]=useState({
    name:"",
    email:"",
    image:""
  })
  const { id } = useParams();


  useEffect(()=>{
axios.get(`${Api}/user/${id}`)
.then((res)=>setUser(res.data))
  },[id])
const {name,email,image}=user
  const hanlechange = (e) => {
    const editeduser = {
      ...user,
      [e.target.id]: e.target.value
    };
    setUser(editeduser);
  };
  const handlesubmit = () => {
axios.put(`${Api}/edituser/${id}`,{newuser:user})
navigate("/users");
  };

  return (
    <div>
      <Input
        variant="outlined"
        className="inputfield"
        type="text"
        value={name}
        id="name"
        placeholder="NAME"
        onChange={hanlechange}
      />
      <Input
        variant="outlined"
        className="inputfield"
        type="text"
        id="email"
        value={email}
        placeholder="Email"
        onChange={hanlechange}
      />
      <Input
        variant="outlined"
        className="inputfield"
        type="text"
        id="image"
        value={image}
        placeholder="Image url"
        onChange={hanlechange}
      />
      <Button size="md" onClick={handlesubmit}>submit change</Button>
    </div>
  );
};

