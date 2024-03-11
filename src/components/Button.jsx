import { Link } from "react-router-dom"

/* eslint-disable react/prop-types */
const Button = ({name,link}) => {
  return (
    <button className=" hover:bg-[#fff] hover:text-[#000] duration-300 w-fit px-[32px] py-[16px] bg-mainColor rounded-full text-[#fff] text-[25px] md:text-xl ">
       <Link to={link}> {name}</Link>
    </button>
  )
}

export default Button