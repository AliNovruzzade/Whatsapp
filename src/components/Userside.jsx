import React, { useContext } from "react";
import { RxChevronDown } from "react-icons/rx";
import { BiArchiveIn } from "react-icons/bi";
import { IoIosDoneAll } from "react-icons/io";
import { UserContext } from "../context/UserContext";

const Userside = () => {

  let {users , setChat} = useContext(UserContext)

  return (
    <div className="user-side">
      <div className="user-chat-card">
        <div className="user-profile-img">
          <button>
            <BiArchiveIn />
          </button>
        </div>
        <div className="user-chat-info">
          <div className="user-message">
            <p>Archived</p>
          </div>
          <div className="user-date">
            <span>1</span>
          </div>
        </div>
      </div>

      {users.map((v, i) => (
        <div onClick={() => setChat(v)} key={i} className="user-chat-card">
          <div className="user-profile-img">
            <img src={v.imgUrl} alt="" />
          </div>
          <div className="user-chat-info">
            <div className="user-message">
              <span>{v.userName}</span>
              <br />
              <span className="done-icon">
                <IoIosDoneAll color="blue" size={22} />
                {v.lastMessage}
              </span>
            </div>

            <div className="user-date">
              <span>{v.time}</span>
              <button className="btn-icon">
                <RxChevronDown color="#54656f" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Userside;
