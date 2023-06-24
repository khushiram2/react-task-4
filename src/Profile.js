import Button from '@mui/joy/Button/Button'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams,useNavigate } from 'react-router-dom'
import { Api } from './globalApi'


export const Profile = () => {
    const navigate=useNavigate()
    const [user,setUser]=useState({})
    const {id}=useParams()
    useEffect(()=>{
axios.get(`${Api}/user/${id}`)
.then((res)=>setUser(res.data))
    },[id])

  return (
    <div className='containerout'>
    <div style={{marginTop: "160px",boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"}} className='containerforprofile'>
        <img src={user.image} alt=""/>
        <div style={{marginLeft: "30px"}} className='detailscontainerprofile' >
            <h3>Name</h3>
            <h3>{user.name}</h3>
            <h3>E-mail</h3>
            <h3>{user.email}</h3>

            <Button size="md" onClick={()=>navigate(`/edit-profile/${id}`)} >Edit Profile</Button>
        </div>
        </div>
    </div>
  )
}
