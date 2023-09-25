import { Button, Drawer } from 'antd';
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import { AiOutlineEdit } from "react-icons/ai";

const Account = () => {

  let {onClose , open} = useContext(UserContext)

  return (
    <>
      <Drawer title="Profile" placement="left" onClose={onClose} open={open}>
        <div className="profile-details">
          <img src='https://picsum.photos/200/200' alt="" />
          <div className="profile-details-identification">
            <p>Your name</p>
            <br />
            <input type="text"  placeholder='Ali'/>
            <AiOutlineEdit className='icon' />
            <br />
            <br />
            <span>This is not your username or pin. This name will be visible to your WhatsApp contacts.</span>
          </div>
          <div className="profile-details-about">
            <p>About</p>
            <br />
            <input type="text" placeholder='"Though my soul may set in darkness, it will rise in perfect light.I have loved the stars too fondly to be fearful of the night."' />
            <AiOutlineEdit className='icon' />
          </div>
        </div>
      </Drawer>
    </>
  );
};


export default Account;