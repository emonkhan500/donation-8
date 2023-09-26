import { useState } from 'react';
import img from '../../assets/Resources/Rectangle 4287-1.png'

const Banner = ({setValue}) => {
  const [inputValue ,setInputValue]=useState('')

  return (
    <div style={{backgroundColor:'#FFFFFFF2'}}>
      <div
        className="hero h-[600px]"
        style={{
          // backgroundImage:
          //   "url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)",

          backgroundImage:
            "url(https://i.ibb.co/njtYNDL/istockphoto-1425582326-1024x1024.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-90"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-full">
            <h2 className="text-5xl font-bold text-center pt-12">
              I Grow By Helping People In Need
            </h2>
            <div className=" text-center mt-7">
              <input onChange={(e)=>{setInputValue(e.target.value)}}
                className="border p-2 w-96 rounded"
                type="text"
                placeholder="Search"
              />
              <button onClick={()=>setValue(inputValue)} className="bg-red-600 p-2 rounded border text-white">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
