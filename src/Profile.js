import Button from '@mui/joy/Button/Button'
import React from 'react'
import { useContext } from 'react'
import { Usercontext } from './context/Usercontext'
import { useParams,useNavigate } from 'react-router-dom'


export const Profile = () => {
    const navigate=useNavigate()
    const {id}=useParams()
    const a = useContext(Usercontext)
    const userList=a.userList
const filteredUser=userList.filter((e)=> e.id === +id)
const user=filteredUser[0]
  return (
    <div className='containerout'>
    <div style={{marginTop: "160px"}} className='containerforprofile'>
        <img src={user.src} alt=""/>
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
