import React from 'react'
import {IoBagHandle} from 'react-icons/io5'
import { FcFlashOn } from "react-icons/fc";
import { FcHighPriority } from "react-icons/fc";
import { FcContacts } from "react-icons/fc";
import { FcPortraitMode } from "react-icons/fc";
import { FcConferenceCall } from "react-icons/fc";
export default function 
() {
  return (
    <div>
    <div className= "flex  gap-1 w-full rounded-full ">

      <BoxWrapper>
      <div className='bg-sky-100 rounded p-4  border border-gray-200 flex items-center  mr-0.5 h-28  w-96'>
         <div className='rounded-full h-12 w-12 flex items-center justify-center'>
          <FcPortraitMode className='text-6xl text-white mb-9' />
        </div> 
        <div className="pl-4"> 
          <span className ="text-sm text-black-500 font-bold  ">Hello Zintlr!</span> <br /> 
          <span className ="text-sm text-gray-500 font-bold ">You have 250 users</span>

<div className='flex flex-row'>

          <div className= 'flex items-center  pt-2'>
            <strong className= 'text-sm text-white font-semibold   border-black-100 bg-gray-700 p-2 rounded hover:cursor-pointer hover:bg-gray-400 hover:text-black '>Add consumers</strong>
            </div> 
             <div className= 'flex items-center pt-2 pl-2'>
            <strong className= 'text-sm text-black font-semibold  border border-black bg-white p-2 rounded hover:cursor-pointer hover:bg-black hover:text-white'>View List</strong>
            </div> 
</div>
          </div>
        </div>
      </BoxWrapper>
       <BoxWrapper >
      <div className='bg-orange-200 rounded p-4 flex-1 border border-gray-200 flex items-center h-28'>
        <div className='rounded-full h-12  w-12 flex items-center justify-center '>
          <FcContacts className='text-4xl text-white mb-9' /> 
        </div>
        <div className="pl-4">
          <span className ="text-sm text-black-500 font-bold ">You have <strong>276</strong> KYC approval pending </span>
          <div className= 'flex items-center'>
          <div className= 'flex items-center pt-2'>
            <strong className= 'text-sm text-white font-semibold   border-black-100 bg-gray-700 p-2 rounded hover:cursor-pointer hover:bg-gray-400 hover:text-black'>View List</strong>
            </div>
            </div>
          </div>
        </div>
      </BoxWrapper>

      <BoxWrapper>
        <div className='bg-red-200 rounded p-4 flex-1 border border-gray-200 flex items-center h-28 '>
        <div className='rounded-full h-12 w-12 flex items-center justify-center '>
          <FcHighPriority  className='text-4xl text-white mb-8' />
        </div>
        <div className="pl-4">
          <span className ="text-sm text-black font-bold">There are<strong>182</strong> high risk consumers </span>
          <div className= 'flex items-center'>
          <div className= 'flex items-center pt-2'>
            <strong className= 'text-sm text-white font-semibold   border-black-100 bg-gray-700 p-2 rounded hover:cursor-pointer hover:bg-gray-400 hover:text-black '>View List</strong>
            </div>
            </div>
          </div>
        </div>
      </BoxWrapper>

      <BoxWrapper>
      <div className='bg-blue-200 rounded p-4 flex-1 border border-gray-200 flex items-center  h-28'>
       
        <div className='rounded-full h-12 w-12 flex items-center justify-center  '>
          <FcFlashOn className='text-5xl text-white mb-7' />
        </div> 
        <div className="pl-4">
          <span className ="text-sm text-black font-bold">There are <strong> 32</strong> tickets open </span>
          <div className= 'flex items-center'>
          <div className= 'flex items-center pt-2'>
            <strong className= 'text-sm text-white font-semibold   border-black-100 bg-gray-700 p-2 rounded hover:cursor-pointer hover:bg-gray-400 hover:text-black '>View List</strong>
            </div>
            </div>
          </div>
        </div>
      </BoxWrapper> 
    </div>


    <div className= "flex  gap-1 w-full rounded-full ">
      
    
       


      <BoxWrapper>
      <div className='bg-violet-200 rounded p-4 flex-1 border border-gray-200 flex items-center  h-28'>
       

          <FcConferenceCall className='text-9xl text-white mb-7 pt-4 text-center'/>
         
        <div className="pl-4">
          <span className ="   text-neutral-700 font-bold text-2xl ml-96 mb-5 "><h2>Total Consumers</h2></span>
          <div className= 'flex'>
          <span className =" text-4xl text-center pl-5 text-black font-bold  ml-12 mb-5"><h1>1,342</h1></span>
            </div>
          </div>
        </div>
      </BoxWrapper> 
      <BoxWrapper>
      <div className='bg-neutral-200  rounded p-4 flex-1 border border-violet-500 flex items-center  h-28'>
          <ul className='flex flex-col gap-4 pl-10'>
            <li>Direct Consumers <strong>342</strong></li>
            <li>Through Associates <strong>300</strong></li>
          </ul>

          <ul className='flex flex-col gap-4 pl-20'>
            <li>Through Field Executives <strong>342</strong></li>
            <li>Through Sales Executives <strong>342</strong></li>
          </ul>
        
        </div>
      </BoxWrapper> 
    </div>
    </div>
  )
}

function BoxWrapper({children}){
  return <div className='rounded-sm p-4 flex-1  flex items-center'>{children}</div>
  
}