import React from "react";
import { useContext } from "react";
import { Usercontext } from "./context/Usercontext";
import { useParams, useNavigate } from "react-router-dom";
import Input from "@mui/joy/Input";
import Button from '@mui/joy/Button';

export const EditUser = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const a = useContext(Usercontext);
  const userList = a.userList;
  const usertobeedited = userList.filter((e) => e.id === +id);

  const user = a.user;
  const setuser = a.setUSer;
  const hanlechange = (e) => {
    const editeduser = {
      ...user,
      id: +id,
    };
    editeduser[e.target.id] = e.target.value;
    setuser(editeduser);
  };
  const handlesubmit = () => {
    userList[userList.indexOf(usertobeedited[0])] = user;
    setuser({});
    navigate("/users");
  };

  return (
    <div>
      <Input
        variant="outlined"
        className="inputfield"
        type="text"
        id="name"
        placeholder="NAME"
        onChange={hanlechange}
      />
      <Input
        variant="outlined"
        className="inputfield"
        type="text"
        id="email"
        placeholder="Email"
        onChange={hanlechange}
      />
      <Input
        variant="outlined"
        className="inputfield"
        type="text"
        id="src"
        placeholder="Image url"
        onChange={hanlechange}
      />
      <Button size="md" onClick={handlesubmit}>submit change</Button>
    </div>
  );
};
