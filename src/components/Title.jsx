/* eslint-disable react/prop-types */
const Title = ({title,des}) => {
  return (
    <div className="w-full title flex items-center justify-center flex-col gap-[20px]">
        <h1 className='text-[55px]'>{title}</h1>
        <span className='h-[5px] w-[90px] bg-[#2f8240] rounded-md'></span>
        <p className='text-[#585757] text-[20px]'>{des}</p>
    </div>
  )
}

export default Title