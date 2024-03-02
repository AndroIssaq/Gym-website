import React from 'react'
import { CiDumbbell } from "react-icons/ci";
import { FaPeopleGroup } from "react-icons/fa6";
import { IoBodyOutline } from "react-icons/io5";
import { LuHeartCrack } from "react-icons/lu";
import Title from '../components/Title'

const CoreValue = () => {
    const coreValues=[{icon:CiDumbbell,title:'Excellence',des:'We strive for excellence in everything we do, from our facility to our training programs.'},
    {icon:FaPeopleGroup,title:'Community',des:'We believe in the power of community to motivate, inspire, and support.'},
    {icon:IoBodyOutline,title:'Innovation',des:'We continuously evolve and innovate to deliver cutting-edge fitness experiences.'},
    {icon:LuHeartCrack,title:'Health',des:'We prioritize the health and well-being of our members and community.'},
]
  return (
    <div className="bg-[#0f331f] text-white container rounded-xl xl:h-[60vh] lg:h-[60vh]">
    <div className="p-[20px] flex flex-col items-center justify-center h-full">
        <Title title={'Our Core Values'}/>
      <div className=" grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-8  ">

        {
            coreValues.map((coreValue,index)=>{
                return(
                    <div key={index} className=" flex flex-col items-center justify-center p-[20px]">
                        <coreValue.icon  className="text-[#66ff00] text-[35px]" />
                        <h3 className="text-[35px] font-semibold text-center">{coreValue.title}</h3>
                        <p className="  text-[#bcbbbb] text-center text-[15px] font-light">
                       {coreValue.des}
                        </p>
                  </div>
                )
            })
        }
      </div>
    </div>
  </div>
  )
}

export default CoreValue