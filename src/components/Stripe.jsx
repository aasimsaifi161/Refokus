import React from 'react'

function Stripe({val}) {
  return (
    <div className='w-[16.66%] h-15 px-6 py-6 border-[1px] border-l-0 border-zinc-600 flex justify-between items-center'>
      <img src={val.url} alt="" />
      <span className='font-mono'>{val.number}</span>
    </div>
  )
}

export default Stripe
