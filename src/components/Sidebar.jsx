import React from 'react'
import Navbar from '../components/Navbar'
import Search from './Search'
import Userside from './Userside'

const Sidebar = () => {
  return (
    <div className='sidebar-main'>
      <Navbar />
      <Search />
      <Userside />
    </div>
  )
}

export default Sidebar