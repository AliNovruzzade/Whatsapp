import React, { useContext } from 'react'
import { FaSearch } from 'react-icons/fa';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { UserContext } from '../context/UserContext';

const Chatnavbar = () => {

  const {chat} = useContext(UserContext)

  return (
    <div className='chat-navbar'>
      <div className="chatnavbar-leftside">
        <div className="chatnavbar-user-photo">
          <img src={chat.imgUrl} alt="" />  
        </div> 

        <div className="chatnavbar-user-title">
          <span>{chat.userName}</span>
          <span>{chat.time}</span>
        </div>  
      </div>

      <div className="chatnavbar-rightside">
        <button><FaSearch /></button>
        <button><BsThreeDotsVertical /></button>
      </div>
    </div>
  )
}

export default Chatnavbar