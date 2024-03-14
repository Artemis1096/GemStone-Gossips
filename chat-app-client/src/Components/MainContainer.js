import React from 'react'
import './style.css'
import Sidebar from './Sidebar'
import ChatArea from './ChatArea'
import Welcome from './Welcome'
import CreateGroups from './CreateGroups'
import User_Groups from './User'
import { Outlet } from 'react-router-dom'

function MainContainer() {
  return (
    <div className='main-container'>
        <Sidebar />
        <Outlet />
    </div>
  )
}

export default MainContainer