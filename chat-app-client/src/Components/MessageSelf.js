import React from 'react'

function MessageSelf() {
  var prop2={name:"You",message:"Sample message"}
  return (
    <div className='self-message-container'>
      <div className='messageBox'>
        <p>{prop2.message}</p>
        <p className='self-timeStamp'>12:00</p>
      </div>
    </div>
  )
}

export default MessageSelf