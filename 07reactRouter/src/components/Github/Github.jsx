 import React  from 'react'
 import { useState ,useEffect } from 'react'
 
 function Github() {
  // const data = useLoaderData()
  const [data , setData] = useState([])
  useEffect(()=>{
    fetch( 'https://api.github.com/users/AmanUllah-99' )
    .then(response => response.json())
    .then(data => {
      console.log(data);
      
      setData(data)
    })
  },[])
   return (
     <div className=' flex justify-center text-center m-4 bg-gray-700 text-white p-2 text-3xl rounded-3xl'>
      
      <h1 className='font-bold text-white p-12   '>GitHub Followers:{data.followers} </h1>
       <img
        src={data.avatar_url}
        alt="github avatar"
        className="w-32 h-32 rounded-full border-2 border-white"
      />
      
      </div>
   )
 }
 
 export default Github

//  export const githubInfoloader = async ()=>{
//   const response = await fetch('https://api.github.com/users/AmanUllah-99')
//   return response.json()
//  }