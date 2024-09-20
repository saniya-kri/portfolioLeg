import React from 'react'
import "../App.css";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Skills = () => {

        useGSAP(() => {
                gsap.to('#skils',{y:0, opacity:1, delay: 0.9})
              })  
        useGSAP(() => {
                gsap.to('#gate',{y:0, opacity:1, delay: 0.5})
              })  
        useGSAP(() => {
                gsap.to('#know',{y:0, opacity:1, delay: 0.8})
              })  

  return (
    <div>
      <div className='screen-max-width flex flex-col mt-10'>
           <div className='flex flex-col justify-center'>     
           <div className="select-none mt-20 w-11/12 mx-auto text-[12px] font-bold text-[#7c7c7c] text-center px-4 sm:px-0 tracking-[0.3rem] opacity-0" id='skils'>EXPLORE MY SKILLS</div>
            <div className="w-full justify-center flex mt-5 flex-col items-center">
            <span className="select-none h-[100px] w-[1px] bg-gradient-to-t from-[#019ae9] to-[#000000]"></span>
            <div className="select-none h-[40px] w-[40px] bg-gradient-to-r from-[#019ae9] to-[#00dfd8] rounded-full flex items-center justify-center text-black text-md font-bold">1</div>
            <div className="select-none bg-gradient-to-r from-[#019ae9] to-[#00dfd8] mt-5 text-3xl font-[700] text-clip text-transparent bg-clip-text dancing-font">My Skills</div>
            <div className="mt-6 font-[700] text-[1.8rem] sm:text-[3rem] tracking-[-0.1rem] leading-tight text-center opacity-0 translate-y-[100px]" id='gate'>Gateway to endless innovation</div>
            <div className="mt-5 text-[#cccccc] text-2xl sm:text-4xl dancing-font opacity-0" id='know'>Known Languages</div>
            </div>
           </div>
           
                
           </div>
      </div>

     

      

  )
}

export default Skills