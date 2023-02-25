import React, { useEffect, useState } from 'react'
import {
    Navbar,
    Typography,
  } from "@material-tailwind/react";

  
  
  const TopBar = () => {
      const [close, setClose] = useState(true)
      useEffect(() => {
        setClose(true)
      }, [])
  return (
    <Navbar className={`bg-purple-500 py-1 border-none outline-none transition-all  ${
        close ? "flex" : "hidden"
      } `}>
      <div className="mx-auto max-w-screen-xl text-center">
        <Typography className="font-[600] text-[15px] sm:text-[17px]" >Our Speciality in Paint Customization 🔥. We are ready to give what you want.</Typography>
      </div>
      <button className='mr-2' onClick={() => setClose(false)}>
        X
      </button>
      </Navbar>
  )
}

export default TopBar