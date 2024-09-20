import React from "react";
import { HiiImg } from "../utils";
import "../App.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Herro = () => {
  useGSAP(() => {
    gsap.to("#hii", { y: 0, opacity: 1, delay: 0.5 });
  });
  useGSAP(() => {
    gsap.to("#hiee", { y: 0, opacity: 1, delay: 0.7 });
  });
  useGSAP(() => {
    gsap.to("#para", { y: 0, opacity: 1, delay: 0.7 });
  });

  useGSAP(() => {
    gsap.to("#paraSec", { y: 0, opacity: 1, delay: 0.8 });
  });

  return (
    <div>
      <div className="screen-max-width mx-auto mt-4 flex flex-col">
        <div
          className="flex justify-center my-4 opacity-0 w-full translate-y-20"
          id="hiee"
        >
        </div>
        <div className=" w-full flex flex-col">
          <div className="w-full mx-auto flex items-center">
            <img
              src={HiiImg}
              alt=""
              className=" mx-auto opacity-0 translate-y-20"
              id="hii"
              width={300}
            />
          </div>
          <div className="w-full mx-auto flex items-center mt-10 justify-center">
            <h1 className="text-3xl font-bold sm:text-6xl lg:text-8xl text-center tracking wide opacity-0" id="hiee">
              Contact.Build.
              <span className="bg-gradient-to-r from-[#7928ca] to-[#ff0080]  text-transparent  bg-clip-text">
                Deliver
              </span>
            </h1>
          </div>
        </div>

        <div className="w-7/12 mx-auto text-center">
          <p
            className="text-gray-100 lg:text-[18px] mt-4 text-[15px] opacity-0 translate-y-20"
            id="para"
          >
            Hey, I'm ANJALI, an experienced web developer with a portfolio
            showcasing visually appealing and user-friendly websites. Let's
            bring your ideas to life!
          </p>
        </div>

        <div className="flex justify-center w-8/12 mx-auto">
          <div className="lg:p-14 p-2 flex lg:flex-nowrap flex-wrap mt-2 justify-center">
            <button className="btn2 mx-6 lg:my-1 my-4 font-semibold">
              contact me
            </button>
            <button className="btn2 mx-6 px-12 lg:my-1 my-4 font-semibold">
              Projects
            </button>
          </div>
        </div>

        <div
          className="text-[16px] font-bold text-[#ffffff] text-center px-6 py-8 sm:px-0 opacity-0  translate-y-20"
          id="paraSec"
        >
          WINNER OF THE NEXT.JS CONF COMPETITION, WON OUT OF 100 PEOPLE IN THE
          WORLD.
        </div>
      </div>
    </div>
  );
};

export default Herro;


