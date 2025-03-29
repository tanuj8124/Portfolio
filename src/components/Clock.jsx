import React from 'react'
import { useState, useEffect } from "react";

const Clock = () => {
    const [dateTime, setDateTime] = useState(new Date());
    useEffect(() => {
        const interval = setInterval(() => {
          setDateTime(new Date());
        }, 1000);
    
        return () => clearInterval(interval);
      }, []);

  return (
    <div className="text-center  h-full  w-30 bg-gray-300 text-black border-l-black border-l-1 rounded-br-2xl shadow">
      <p className=" font-semibold">{dateTime.toLocaleDateString()}</p>
      <p className="">{dateTime.toLocaleTimeString()}</p>
    </div>
  )
}

export default Clock