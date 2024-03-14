import React from 'react'

function MessageOthers() {
  var props={name:"other-user",message:"Hi"}
  return (
    <div className="other-message-container">
        <div className="conversation-container">
        <p className="con-icon">{props.name[0]}</p>
        <div className='other-text-content'>
          <p className='con-title'>{props.name}</p>
          <p className="con-lastMessage">{props.message}</p>
          <p className='self-timeStamp'>12:00</p>
        </div>
    </div>  
    </div>
  )
}

export default MessageOthers