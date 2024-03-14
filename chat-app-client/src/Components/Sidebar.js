import React, { useState } from 'react'
import './style.css'
import { IconButton } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';
import NightlightIcon from '@mui/icons-material/Nightlight';
import SearchIcon from '@mui/icons-material/Search';
import ConversationsItem from './ConversationsItem';
import {useNavigate} from "react-router-dom";

function Sidebar() {
  const [conversations,setConverations] = useState([
    {
        name: "T1",
        lastMessage:"Last Message 1",
        timeStamp:"today",
    },
    {
        name: "T2",
        lastMessage:"Last Message 2",
        timeStamp:"today",
    },
    {
        name: "T3",
        lastMessage:"Last Message 3",
        timeStamp:"today",
    }
  ])
  const navigate=useNavigate();
  const [lightTheme,setLightTheme] =useState(true);
  return (
    <div className='sidebar-container'>
        <div className='sb-header'>
            <div>
                <IconButton>
                    <AccountCircleIcon />
                </IconButton>
            </div>
            <div className='other-icons'>
                <IconButton onClick={()=>{navigate("users")}}>
                    <PersonAddIcon />
                </IconButton>
                <IconButton onClick={()=>{navigate("groups")}}>
                    <GroupAddIcon />
                </IconButton>
                <IconButton onClick={()=>{navigate("create-groups")}}>
                    <AddCircleIcon />
                </IconButton>
                <IconButton onClick={()=>{setLightTheme((prevValue)=>{
                    return !prevValue; //toggles setLight's value
                })}}>
                    {lightTheme && <NightlightIcon />}
                    {!lightTheme && <LightModeRoundedIcon />}
                </IconButton>
            </div>
        </div>
        <div className='sb-search'>
            <IconButton>
                <SearchIcon />
            </IconButton>
            <input placeholder='Search' className='search-box'/>
        </div>
        <div className='sb-conversations'>
            {/* fetching data from the conversations array */}
            {conversations.map((conversation)=>{
                return <ConversationsItem props={conversation} key={conversation.name}/>
            })}
        </div>
    </div>
  )
}
export default Sidebar;