import { auth } from '@/utils/firebase'
import React from 'react'

const ChatUI = ({userId,messageText,createdAt,name}) => {
  return (
    <div className='m-2'>
    {userId === auth.currentUser.uid ? 
      <>
      <div className='flex   items-center justify-end'>
    <h1 className=''>{name}</h1>
      <p className='ml-4 bg-cyan-700  rounded-md p-1'>{messageText}</p>
      </div>
      <h1 className='text-[8px] text-end '>{createdAt}</h1>
    </>    
     : (
    <>
       <div className='flex   items-center'>
    <h1 className=''>{name}</h1>
      <p className='ml-4 bg-cyan-700  rounded-md p-1'>{messageText}</p>
      </div>
      <h1 className='text-[8px] '>{createdAt}</h1>
      </>
    
      
    )
      }
     
    </div>
  )
}

export default ChatUI
