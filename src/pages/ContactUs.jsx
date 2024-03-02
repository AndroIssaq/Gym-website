import React from 'react'
import { CiLocationOn } from "react-icons/ci";
import { CiPhone } from "react-icons/ci";
import { HiOutlinePaperAirplane } from "react-icons/hi2";
import Panner from '../components/Panner';
const ContactUs = () => {
  return (
    <section className=" flex flex-col items-center justify-center  gap-[50px]">
      <Panner title={'Contact Us'}/>
    <div className="container grid grid-cols-1 md:grid-cols-2 gap-16 ">
      <div>
        <h1 className="text-4xl font-bold  mb-2">Get in Touch</h1>
        <div className="w-16 h-1 bg-[#00d084] mb-6" />
        <p className="mb-8">
          Get in touch with us at EliteGYM for any questions, inquiries, or assistance. Our dedicated team is here to
          support your fitness journey. Reach out today to start your path to a healthier lifestyle.
        </p>
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <CiLocationOn className="text-[#00d084] w-6 h-6" />
            <span>123 Fitness Avenue, Cityville, State 12345, USA</span>
          </div>
          <div className="flex items-center space-x-2">
            <CiPhone className="text-[#00d084] w-6 h-6" />
            <span>+1 (123) 456-7890</span>
          </div>
          <div className="flex items-center space-x-2">
            <HiOutlinePaperAirplane className="text-[#00d084] w-6 h-6" />
            <span>info@elitegym.com</span>
          </div>
        </div>
      </div>
      <div className="bg-[#c9e9d3] mb-[50px] p-8 rounded-lg shadow-md">
      <form action="#" className="grid  grid-cols-1 h-[50vh] gap-y-6 sm:grid-cols-2 sm:gap-x-8" method="POST">
            <div>
              <label className="block text-sm font-medium text-gray-700" htmlFor="first-name">
                Name
              </label>
              <div className="mt-1">
                <input
                  autoComplete="given-name"
                  className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                  id="first-name"
                  name="first-name"
                  type="text"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700" htmlFor="email">
                Email
              </label>
              <div className="mt-1">
                <input
                  autoComplete="email"
                  className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                  id="email"
                  name="email"
                  type="email"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-gray-700" htmlFor="message">
                Message
              </label>
              <div className="mt-1">
                <textarea
                  className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md"
                  id="message"
                  name="message"
                  rows="4"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <button
                className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                type="submit"
              >
                Send Message
              </button>
            </div>
          </form>
    </div>
  </div>
  </section>
  )
}

export default ContactUs