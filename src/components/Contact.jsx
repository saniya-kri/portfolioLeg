import React from "react";
import { TbLayersLinked } from "react-icons/tb";
import { crockImg } from "../utils";

const Contact = () => {
  return (
    <div>
      <div className="screen-max-width mx-auto p-10 mt-10">
        <div className="w-full justify-center flex mt-5 flex-col items-center">
          <span class="select-none h-[100px] w-[1px] bg-gradient-to-t from-[#ff4d4d] to-[#000000]"></span>
          <div class="select-none h-[40px] w-[40px] bg-gradient-to-r from-[#ff4d4d] to-[#f9cb28] rounded-full flex items-center justify-center text-black text-md font-bold">
            3
          </div>
          <div
            id="contacts"
            class="select-none bg-gradient-to-r from-[#ff4d4d] to-[#f9cb28] mt-5 text-3xl font-[700] text-clip text-transparent bg-clip-text dancing-font"
          >
            My Contacts
          </div>
          <div class="mt-6 font-[700] text-[2rem] sm:text-[3rem] tracking-[-0.1rem] leading-tight text-center">
            We are all connected
          </div>
          <div class="mt-5 text-[#cccccc] text-2xl sm:text-4xl dancing-font">
            Let's Connect
          </div>
        
        <div className="mt-14">
        <button className="p-[3px] relative">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
            <div className="lg:px-8 px-2 py-2  bg-black rounded-lg flex items-center justify-center relative group transition duration-200 text-white hover:bg-transparent">
            <TbLayersLinked className="mx-2 w-7 mt-1"/>
              <a href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile">my profile</a>
            </div>
          </button>
        </div>

        <div className="mt-14 w-full flex justify-center">
                <img src={crockImg} className="w-[250px]" alt="" />
        </div>
        </div>
      </div>
      <center className="text-gray-100 p-2">Made with ❤️ Anjali © 2024 </center>
    </div>
  );
};

export default Contact;
