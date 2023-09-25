import React, { useContext } from 'react'
import Sidebar from '../components/Sidebar'
import Chatside from '../components/Chatside'
import Account from '../components/Account'
import { UserContext } from '../context/UserContext'

const Main = () => {

  let {openProfile} = useContext(UserContext)

  return (
    <div className='mainpage'>
    <Account showProfile={openProfile} />
      <div className='main'>
          <Sidebar />
          <Chatside />
      </div>
    </div>
  )
}

export default Main