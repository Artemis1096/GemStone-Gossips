import React from 'react'
import "./style.css"
import { IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import logo from "../icons/chat.png"

function User_Groups() {
  return (
    <div className='list-container'>
        <div className='ug-header'>
            <img src={logo} alt="logo" style={{height:"2rem",width:"2rem",marginLeft:"10px"}}/>
            <p className='ug-title'>Online Users</p>
        </div>
        <div className='sb-search'>
            <IconButton>
                <SearchIcon />
            </IconButton>
            <input placeholder='Search' className='search-box'/>
        </div>
        <div className='ug-list'>
            <div className='list-item'>
                <p className='con-icon'>T</p>
                <p className='con-title'>User</p>
            </div>
            <div className='list-item'>
                <p className='con-icon'>T</p>
                <p className='con-title'>User</p>
            </div>
            <div className='list-item'>
                <p className='con-icon'>T</p>
                <p className='con-title'>User</p>
            </div>
        </div>
    </div>
  )
}

export default User_Groups