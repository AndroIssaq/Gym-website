import React from 'react'

const Panner = ({title}) => {
  return (
    <div className='w-[95%] h-[50vh] my-[50px] rounded-xl bg-[93e06f] flex flex-col items-center justify-center '>
        <h1 className='text-[55px]'>{title}</h1>
        <span className='h-[5px] w-[90px] bg-[#2f8240] rounded-md'></span>
    </div>
  )
}

export default Panner