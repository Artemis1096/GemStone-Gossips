import React,{useState} from 'react'
import { IconButton } from '@mui/material'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import SendIcon from '@mui/icons-material/Send';
import MessageOthers from "./MessageOthers"
import MessageSelf from "./MessageSelf"

function ChatArea() {
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
      var props=conversations[0];
  return (
    <div className='chatArea-container'>
        <div className='chatArea-header'>
            <p className="con-icon">{props.name[0]}</p>
            <div className="header-text">
                <p className="con-title">{props.name}</p>
                <p className="con-timeStamp">{props.timeStamp}</p>
            </div>
            <IconButton>
                <DeleteForeverIcon />
            </IconButton>
        </div>
        <div className='message-container'>
            <MessageOthers />
            <MessageSelf />
        </div>
        <div className='text-input-area'>
            <input placeholder='Type a Message' className='search-box' />
            <IconButton>
                <SendIcon />
            </IconButton>
        </div>
    </div>
  )
}

export default ChatArea