import React from 'react';
import { IoMdReturnRight } from "react-icons/io";

function Button({title="Get Started"}) {
  return (
    <div className='w-[150px] px-4 py-2 bg-zinc-100 text-black rounded-full flex items-center justify-between cursor-pointer'>
      <span className='text-sm'>{title}</span>
      <IoMdReturnRight />
    </div>
  )
}

export default Button
