import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "@mui/joy/Input";
import Button from '@mui/joy/Button';
import axios from "axios";
import { Api } from "./globalApi";
export const Adduser = () => {
  const navigate = useNavigate()
const [user,setUser]=useState({
  name:"",
  email:"",
  image:""
})

const {name,email,image}=user

  const hanlechange = (e) => {
    const newuser = {
      ...user,
      [e.target.id]: e.target.value
    };
    setUser(newuser)
  };


  const handlesubmit = () => {
    axios.post(`${Api}/newuser`,{newuser:user})
    navigate("/users")
  };

  return (
    <div>
      <Input
        className="inputfield"
        variant="outlined"
        value={name}
        type="name"
        id="name"
        placeholder="NAME"
        onChange={hanlechange}
      />
      <Input
        className="inputfield"
        variant="outlined"
        type="email"
        value={email}
        id="email"
        placeholder="Email"
        onChange={hanlechange}
      />
      <Input
        className="inputfield"
        variant="outlined"
        type="text"
        value={image}
        id="image"
        placeholder="Image URL"
        onChange={hanlechange}
      />
      <Button size="md" onClick={handlesubmit} >submit</Button>
    </div>
  );
};
