import { useRouter } from 'next/router'
import React from 'react'
import {useAuthState} from 'react-firebase-hooks/auth'
import {auth} from '../utils/firebase'


const Home = () => {

  return (
    <div className='flex justify-around'>
      <h1>Chat App </h1>
      <button type="button" className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Log Out</button>
    </div>
  )
}




export default Home
