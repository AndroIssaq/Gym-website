/* eslint-disable react/prop-types */
const Button = ({name}) => {
  return (
    <button className=" hover:bg-[#fff] hover:text-[#000] duration-300 w-fit px-[32px] py-[16px] bg-mainColor rounded-full text-[#fff] text-[25px] md:text-xl ">
        {name}
    </button>
  )
}

export default Button