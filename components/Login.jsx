import React from 'react';
import {FcGoogle} from 'react-icons/fc'
import {auth,provider} from '../utils/firebase'
import {signInWithPopup} from 'firebase/auth'
import { useRouter } from 'next/router';

const Login = () => {
   const router =  useRouter()

   const handleGoogleLogin =async () => {
    try{
     await  signInWithPopup(auth,provider).then((res)=>{
            console.log(res)
            router.push('/')
        })
    }catch(err){
        console.error(err)
    }
  };


  return (
    <div className="flex items-center justify-center h-screen">
      <div className="p-6 rounded-lg shadow-xl">
        <div className="mb-4 flex items-center justify-center">
        

          <button
            className=" hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded-full"
            onClick={handleGoogleLogin}
            >
                <div className='flex'>

            <FcGoogle className="fab fa-google mr-2" size={30}/>
            <span>
                
            Login with Google
            </span>
            </div>
          </button>
              
        </div>
      </div>
    </div>
  );
};

export default Login;