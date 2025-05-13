import React, { useEffect, useState } from 'react'

const Github = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://api.github.com/users/Aditya10-cmd')
        .then (res => res.json())
        .then(data => {
            console.log(data)
            setData(data)
        })
    } ,[])
 
  return (
    <div className='text-3xl text-center bg-gray-600 p-6 m-4 text-white'>
      Github Id : {data.login}
      <img src= {data.avatar_url} alt=""
      className='mx-auto mt-5 rounded-3xl' />
    </div>
  )
}

export default Github
