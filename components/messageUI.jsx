import React from 'react'

const MessageUI = ({messageText,name , createdAt}) => {
  return (
<div className=''>
  <div className='flex justify-end  items-center'>
<h1 className=''>{name}</h1>
  <p className='ml-4 bg-cyan-700  rounded-md p-1'>{messageText}</p>
  </div>
  <h1 className='text-[8px] text-end'>{createdAt}</h1>
</div>
    
          
              
   

  )
}

export default MessageUI
