import React, { useContext, useEffect } from 'react'
import { UserContext } from '../context/UserContext'
import {BsEmojiLaughing, BsCheck2All, BsCheck2} from "react-icons/bs";


const Messageside = () => {

  let {writeMessage , setWriteMessage} = useContext(UserContext)

  const statusMessage = (status) => {
    switch(status){
      case 1 : return <BsCheck2 />;
      case 2 : return <BsCheck2All />;
      case 3 : return <BsCheck2All style={{color: 'blue'}} />;
      default : {
        console.error('Status does not exist')
      }
    }
  }

  let defaultMessage = [
    {
      message: 'Hello , welcome to whatsapp!',
      msgHours: '15',
      msgMinute: '30',
      statusUser: 1,
      chatId: 1
    }
  ]

  useEffect(() => {
    setWriteMessage(defaultMessage)
  } , [])

  return (

    <div className='message-side'>

    {
      writeMessage.map(( v , i) => (
        <div key={i}>
            <div className={v.chatId === 0 ? "message-text my-message" : "message-text my-message"}>
            <button>
              <BsEmojiLaughing />
            </button>
            <p>{v.message}
              <br />
              <span>{v.msgHours}: {v.msgMinute} {statusMessage(v.statusUser)}</span>
            </p>
          </div>



          <div className={v.chatId === 1 ? "message-text friend-message" : "display-none"}>
            <p>{v.message}
              <br />
              <span>{v.msgHours}: {v.msgMinute} {statusMessage(v.statusUser)}</span>
            </p>
            <button>
              <BsEmojiLaughing />
            </button>
          </div>
        </div>
      ))
    }

      
    </div>
  )
}

export default Messageside