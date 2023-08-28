import { useState } from 'react'
import useSWR from 'swr'
  const Fetch=async()=>{
      const resp=await fetch('https://jafardarwesh.github.io/my_api/data.json')
      const data=await resp.json()
  return (data)
}

export default function Home() {
   const {data,error}= useSWR('dashboard',Fetch)
  if(error) return "ERROR (SWR)";
  if(!data) return "Loading..."
  console.log(data);
  
return (
    <>
    {
      data.map((i:any)=>{
        return <p>{i.id}:{i.name}</p>
      })
    }
    </>
  )
}
