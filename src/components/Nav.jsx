import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'
import { GiPaperPlane } from "react-icons/gi";



const Nav = () => {

      useGSAP(() => {
        gsap.to('#nav',{y:0, opacity:1, delay: 0.5})
      })  

  return (
   <div className='border-b border-gray-800'>
        <div className='w-11/12 mx-auto flex justify-between opacity-0 translate-y-[100px] items-center p-2' id='nav'>
        <div className='text-2xl font-bold'>Anjali.Dev</div>
       <div className='btn'>
         <div className='flex items-center'> 
            <GiPaperPlane className='w-[15px] h-[15px]'/>
             <a href='#'>Hire me</a> 
         </div>
       </div>
    </div>
   </div>
  )
}

export default Nav