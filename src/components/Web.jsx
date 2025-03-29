import React from 'react'

const Web = (props) => {
  return (
    <div className='grid grid-rows-16 w-full h-full border-2 border-l-black border-t-black'>
        <div className='grid grid-cols-24 w-full bg-white h-full items-center  border-2 S shadow-2xl'>
            <div className='col-span-23 flex justify-center items-center '>Browser</div>
            <div className='items-center justify-center flex h-full bg-red-700 text-white'>x</div>
        </div>
        <div className='row-span-15  border-l-2 overflow-y-auto'>
        <iframe  className='h-full w-full' src="https://dr-crop-tanuj8124s-projects.vercel.app/"></iframe>
        </div>


    </div>
  )
}

export default Web