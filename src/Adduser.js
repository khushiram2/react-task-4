import React from "react";
import { useContext } from "react";
import { Usercontext } from "./context/Usercontext";
import { useNavigate } from "react-router-dom";
import Input from "@mui/joy/Input";
import Button from '@mui/joy/Button';

export const Adduser = () => {
    const navigate=useNavigate()
  const a = useContext(Usercontext);
  const userList = a.userList;
  const user = a.user;
  const setuser = a.setUSer;
  const setUSerList = a.setUSerList;
  const hanlechange = (e) => {
    const newuser = {
        ...user,
        id:userList.length+1,

    };

    newuser[e.target.id] = e.target.value
    setuser(newuser)


  };
 

  const handlesubmit = () => {
   setUSerList([...userList,user])
   setuser({})
   navigate("/users")
  };

  return (
    <div>
      <Input
      className="inputfield"
      variant="outlined"
       type="name" 
       id="name" 
       placeholder="NAME" 
       onChange={hanlechange} 
       />
      <Input
      className="inputfield"
       variant="outlined"
        type="email"
        id="email"
        placeholder="Email"
        onChange={hanlechange}
      />
      <Input
      className="inputfield"
       variant="outlined"
        type="text"
        id="src"
        placeholder="Image url"
        onChange={hanlechange}
      />
      <Button size="md" onClick={handlesubmit} >submit</Button>
    </div>
  );
};
