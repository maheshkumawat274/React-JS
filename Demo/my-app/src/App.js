"use client"
import React, { useState } from "react";
const Page = () =>{
  const[marks,setMarks]=useState(45)
  const  Hekko=()=>{
    setMarks(22)

  }
  return(
  <>
  <h1>Mahesh kumawat</h1>
  <p>My marks is {marks}</p>
  <button onClick={Hekko}>click</button>
  </>)
}
export default Page;