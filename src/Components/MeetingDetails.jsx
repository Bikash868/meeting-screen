import React,{useState} from 'react'
import { Icon } from '@mui/material';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import EventIcon from '@mui/icons-material/Event';
import PublicIcon from '@mui/icons-material/Public';

const MeetingDetails = () => {

    const IconStyle = {
        height:'35px', 
        width:'35px',
        color:'gray'
    }

    const GrayText = {
        color:'gray'
    }
  return (
    <div className='flex flex-col p-6 w-1/3 meeting'>
        <div className="flex font-medium text-50 ml-3" style={GrayText}>
            {`Bikash Das`}
        </div>
        <div className="flex text-2xl font-bold text-50 ml-3 text-left">
            {`15 Minute Meeting`}
        </div>
        <div className="flex items-center">
            <Icon className="text-sm" style={IconStyle}>
                <AccessTimeFilledIcon/>
            </Icon>
            <div className="text-sm mb-2 font-medium" style={GrayText}>
                {`15 min`}
            </div>
        </div>
        <div className="flex items-center">
            <Icon className='mb-5' style={IconStyle}>
                <EventIcon/>
            </Icon>
            <div className="flex text-sm font-medium text-30 text-left" style={GrayText}>
                {`9.30am - 9.45am , Friday, September 16,2022`}
            </div>
        </div>

        <div className="flex mt-1 text-50 items-center">
            <Icon style={IconStyle}>
                <PublicIcon/>
            </Icon>
            <div className="text-md font-medium text-30 mt-2" style={GrayText}>
                {`India Standard Time`}
            </div>
        </div>
    </div>
  )
}

export default MeetingDetails