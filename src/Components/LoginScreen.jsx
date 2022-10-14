import React from 'react'
import MeetingDetails from './MeetingDetails'
import UserDetails from './UserDetails'

const LoginScreen = () => {
  return (
    <div className='flex justify-center items-center w-2/3 h-2/3 border rounded-lg border-2 shadow-md m-auto' style={{marginTop:'50px'}}>
        <div className='flex justify-center w-full h-full items-start'>
            <MeetingDetails/>
            <UserDetails/>
        </div>
    </div>
  )
}

export default LoginScreen