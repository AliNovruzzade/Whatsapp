import React from 'react'
import { BsWhatsapp } from 'react-icons/bs'
import { FaLock } from 'react-icons/fa'
import { Progress } from 'antd';


const Loading = ({progress}) => {
  return (
    <div className='loading-page'>
        <span className='loading-whatsapp'><BsWhatsapp /></span>
        <div className="loading-progress">
            <Progress showInfo={false} size='small' style={{width: '400px'}} strokeColor='#00A884'  percent={progress} />
            <div className="loading-text">
                <h1>WhatsApp</h1>
                <div className="loading-icon">
                    <FaLock className='fa-lock' />
                    <p>End-to-end encrypted</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Loading