import { Link } from "react-router-dom"

/* eslint-disable react/prop-types */
const Button = ({name,link}) => {
  return (
    <Link to={link}> 
      <button className=" hover:bg-[#fff] hover:text-[#000] duration-300 w-fit px-[32px] py-[16px] bg-mainColor rounded-full text-[#fff] text-[25px] md:text-xl ">
        {name}
      </button>
    </Link>
  )
}

export default Button