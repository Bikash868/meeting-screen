import React,{useEffect, useState} from 'react'
import DialogComp from './Dialouge'

function isInvalidEmail(email) {
    return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);
  }



const UserDetails = () => {
        
    const x = {name:"",email:"",info:""};
    const [user,setUser] = useState(x);
    const [open, setOpen] = useState(false);

    const handleSubmit = () => {
        if(!isInvalidEmail(user.email)){
            alert('Email is invalid')
        }
        setOpen(true);

        setTimeout(()=>{
            window.location.reload();
        },3000)
    }

    const handleClose = () => {
        setOpen(false);
    };

    const handleName = (e) => {
        setUser({...user,'name':e.target.value})
    }

    const handleEmail = (e) => {
        setUser({...user,'email':e.target.value})
    }

    const handleInfo = (e) => {
        setUser({...user,'info':e.target.value})
    }

  return (
    <div className='flex flex-col border-l-2 p-6 w-2/3 mt-0 user'>
      <div className="flex mt-1 text-2xl font-bold text-500">
        Enter Details
      </div>
      
      <div className="mx-2 w-full flex-1">
        <div className="flex mt-3 h-6 text-xs font-bold leading-8 text-gray-500">
          Full Name *
        </div>
        <div className="my-2 flex rounded-lg border border-gray-300 bg-white p-1">
          <input
            name="username"
            placeholder="Bikash Das"
            className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
            value = {user.name}
            onChange = {handleName}
          />
        </div>
      </div>
      <div className="mx-2 w-full flex-1">
        <div className="flex mt-3 h-6 text-xs font-bold leading-8 text-gray-500">
          Email *
        </div>
        <div className="my-2 flex rounded border border-gray-200 bg-white p-1">
          <input
            name="password"
            placeholder="bikashd@gmail.com"
            type="email"
            className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
            value = {user.email}
            onChange = {handleEmail}
          />
        </div>
      </div>
      <span className="flex mt-2">
        <button style={{color: 'rgb(14 165 233)'}} className="flex h-10 border-2 border-sky-500 rounded-full p-2 justify-center items-center">
          Add Guests
        </button>
      </span>
      <div className="mx-2 w-full flex-1">
        <div className="flex mt-3 h-6 text-xs font-bold leading-8 text-gray-500">
          Please share Anything that will help prepare for our meeting.
        </div>
        <div className="my-2 flex rounded border border-gray-200 bg-white p-1">
          <textarea
            className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
            value = {user.info}
            onChange = {handleInfo}
          />
        </div>
      </div>
      <span className="flex mt-10">
        <button style={{backgroundColor:'#247ffe',color: 'white'}} onClick = {handleSubmit} className="h-10 text-700 rounded-full p-2 justify-center items-center">
          Schedule Event
        </button>
      </span>
      <DialogComp
        open={open}
        onClose={handleClose}
        name = {user.name}
        email = {user.email}
        info = {user.info}
      />
    </div>
  )
}

export default UserDetails