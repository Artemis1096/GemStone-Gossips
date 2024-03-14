import React from 'react'
import logo from "../icons/chat.png"

function Welcome() {
  return (
    <div className='welcome-container'>
        <img src={logo} alt='Logo' className='welcome-logo'/>
        <p>View and Text directly to people present in chat room</p>
    </div>
  );
}

export default Welcome