import React from 'react'
import Dialog from '@mui/material/Dialog';

function isValidEmail(email) {
  return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);
}

const DialogComp = (props) =>{
    const { onClose, open, name, email, info } = props;
    console.log("email valid:",isValidEmail(email) )
  
    const handleClose = () => {
      onClose();
    };
  
    return (
      <Dialog onClose={handleClose} open={open}>
        <div className='p-5'>
            {
                name==='' || !isValidEmail(email) ? <span>Please fill the required details correctly</span> :
                <div className='flex flex-col'>
                    <span className='flex justify-center'>Meeting is scheduled successfully</span>
                    <div>{`Name: ${name}`}</div>
                    <div>{`Email: ${email}`}</div>
                    <div>{`Info: ${info}`}</div>
                </div>
            }
        </div>
      </Dialog>
    );
  }
  

export default DialogComp