import React from 'react'
import Chatnavbar from './Chatnavbar'
import Messageside from './Messageside'
import InputFooter from './InputFooter'

const Chatside = () => {
  return (
    <div className='chatside-main'>
      <Chatnavbar />
      <Messageside />
      <InputFooter />
    </div>
  )
}

export default Chatside