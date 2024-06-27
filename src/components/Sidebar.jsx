/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { assets } from '../assets/assets.js'
const Sidebar = () => {
  return (
    <div className="h-full w-[35%] p-2 flex-col gap-2 text-white hidden lg:flex">
      <div className="bg-[#121212] h-[15%] rounded flex flex-col justify-around">
        <div className="flex items-center g-3 pl-8 cursor-pointer">
          <img className="w-6 m-2" src={assets.home_icon} alt="" />
          <p className=" font-bold">Home</p>
        </div>
        <div className="flex items-center g-3 pl-8 cursor-pointer">
          <img className="w-6 m-2" src={assets.search_icon} alt="" />
          <p className="font-bold">Search</p>
        </div>
      </div>
      <div className="rounded bg-[#121212] h-[85%]">
        <div className="p-4 flex items-center justify-between">
          <div className="flex items-center g-3">
            <img className="w-8 m-2" src={assets.stack_icon} alt="" />
            <p className="font-semibold">Your Library</p>
          </div>
          <div className="flex items-center g-3">
            <img className="w-5 m-2" src={assets.arrow_icon} alt="" />
            <img className="w-5 m-2" src={assets.plus_icon} alt="" />
          </div>
        </div>
        <div className="p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4">
          <h1>Create your first playlist</h1>
          <p className="font-light">its easy we will help you</p>
          <button className="px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4">
            Create Playlist
          </button>
        </div>
        <div className="p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4 mt-4">
          <h1>Let's find some podcasts to follow</h1>
          <p className="font-light">We will keep you updated on new episodes</p>
          <button className="px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4">
            Browse Podcasts
          </button>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
