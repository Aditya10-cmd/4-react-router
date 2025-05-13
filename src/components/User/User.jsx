import React from 'react'
import { useParams } from 'react-router-dom'


const User = () => {
    const {userid} = useParams()
  return (
    <div className='text-center bg-gray-600 p-9 text-white text-3xl'>
      User: {userid}  
    </div>
  ) 
}

export default User
