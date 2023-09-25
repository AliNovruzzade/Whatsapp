import React , {useContext, useState} from 'react'
import { BsEmojiSmile } from "react-icons/bs";
import { FiPaperclip } from 'react-icons/fi';
import { BiMicrophone } from "react-icons/bi";
import { IoMdSend } from "react-icons/io";
import { UserContext } from '../context/UserContext';

const InputFooter = () => {

    let {sendLocation , sendMsg , setSendMsg , writeMessage , setWriteMessage} = useContext(UserContext)

    const handleSendMessage = async () => {
        if(sendMsg.length > 0 ){
            await writeMessage.push({
                message: sendMsg ,
                msgHours: '17',
                msgMinute: '30',
                statusUser: 2,
                chatId: 0
            })
            await setWriteMessage([...writeMessage])
            setSendMsg('')
        }
    }

    const handleMessageByEnter = (e) => {
        if(e.keyCode == 13){
            handleSendMessage()
        }
    }

  return (
    <div className='write-message'>
        <button><BsEmojiSmile /></button>
        <button onClick={sendLocation}><FiPaperclip /></button>
        <input 
        onKeyDown={handleMessageByEnter}
        placeholder='Type a message' 
        type="text" 
        value={sendMsg}
        onChange={(e) => setSendMsg(e.target.value)}
        />
        {
            !sendMsg ?
            (
                <button><BiMicrophone /></button>
            )
            :
            (
                <button><IoMdSend /></button>
            )
        }
 
 
    </div>
  )
}

export default InputFooter