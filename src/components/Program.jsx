import React from 'react'
import { FaGithub } from "react-icons/fa";

const Program = (props) => {
  return (
    <>
    
    <a href={props.Link}>
      
      <div className=' flex items-center z-top  w-full h-10 bg-gray-400 box-border border-2 border-white hover:border-r-white hover:border-b-white hover:border-l-black hover:border-t-black  border-r-black border-b-black'>
    <FaGithub size={30} className="text-black  " />
    <h3 className='ml-4'>{props.ProjectName}</h3>
    </div>
      </a>
    </>
  )
}

export default Program