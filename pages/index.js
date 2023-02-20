import ChatInput from '@/components/ChatInput';
import Login from '@/components/Login'
import { useState } from 'react';
import {useAuthState} from 'react-firebase-hooks/auth'
import {auth} from '../utils/firebase'

export default function Home() {
  const [user] = useAuthState(auth);
const [chatRoom, setChatRoom] = useState(null)
  if(!user) return <Login />
 
 
  return (
    <>
 
     <div className="dark:bg-gray-900 text-white justify-end flex ">
     <button className="relative inline-flex items-center justify-center mt-4 p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
  <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
      LogOut
  </span>
</button>
     </div>
          {chatRoom ? "Chat" : (
            <ChatInput chatRoom={chatRoom} setChatRoom={setChatRoom} />
          )}
    </>
  )
}