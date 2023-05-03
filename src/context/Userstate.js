import React from 'react'
import { Usercontext } from './Usercontext'
import { useState } from 'react'
export const Userstate = (props) => {
    const users = [
        {
          id:1,
          name: "ron",
          email: "jhon@gamail.com",
          src: "https://th.bing.com/th/id/OIP.kQb9khtxOxwErol-KhGysgHaHs?w=178&h=185&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        },
        {
          id:2,
          name: "phon",
          email: "jhon@gamail.com",
          src: "https://th.bing.com/th/id/OIP.qoKmD0fVzftsPFEere0xswHaHa?pid=ImgDet&w=207&h=207&c=7&dpr=1.3",
        },
        {
          id:3,
          name: "chon",
          email: "jhon@gamail.com",
          src: "https://th.bing.com/th/id/OIP.LEnJzyxSSM9PXoZhuNOvTwHaHa?w=143&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        },
        {
          id:4,
          name: "fhon",
          email: "jhon@gamail.com",
          src: "https://th.bing.com/th/id/OIP.TzrRvkB-mBEYrdj7uRIV_QHaHa?pid=ImgDet&w=207&h=207&c=7&dpr=1.3",
        },
        {
          id:5,
          name: "lhon",
          email: "jhon@gamail.com",
          src: "https://th.bing.com/th/id/OIP.JeCJy5zkbPs5mq_2W4onZwHaHf?pid=ImgDet&w=207&h=208&c=7&dpr=1.3",
        },
        {
          id:6,
          name: "ahon",
          email: "jhon@gamail.com",
          src: "https://th.bing.com/th/id/OIP.RxMLJVB--ePeabKFOoIuYwAAAA?pid=ImgDet&w=181&h=181&c=7&dpr=1.3",
        },
        {
          id:7,
          name: "zhon",
          email: "jhon@gamail.com",
          src: "https://th.bing.com/th/id/OIP.kQb9khtxOxwErol-KhGysgHaHs?w=178&h=185&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        },
        {
          id:8,
          name: "uhon",
          email: "jhon@gamail.com",
          src: "https://th.bing.com/th/id/OIP.kQb9khtxOxwErol-KhGysgHaHs?w=178&h=185&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        },
      ];

    const [userList, setUSerList]=useState(users)

    const [user,setUSer]=useState({})



  return (
    <Usercontext.Provider value={{userList,setUSerList,user,setUSer}} >
        { props.children }
    </Usercontext.Provider>
  )
}
