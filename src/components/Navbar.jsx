import React, { useContext } from 'react'
import { FaUsers } from "react-icons/fa";
import { AiOutlineSync } from "react-icons/ai";
import { BiCommentDetail } from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { UserContext } from '../context/UserContext';

const Navbar = () => {

  let {showDrawer} = useContext(UserContext)

  return (
    <div className='navbar-sidebar'>
        <div className="navbar-profile">
            <img onClick={showDrawer} src='https://picsum.photos/200/300' alt="" />
        </div>
        <div className="navbar-icons">
            <button title='Communities'><FaUsers/></button>
            <button title='Status'><AiOutlineSync/></button>
            <button title='New Chat'><BiCommentDetail/></button>
            <button title='Menu'><BsThreeDotsVertical/></button>
        </div>
    </div>
  )
}

export default Navbar