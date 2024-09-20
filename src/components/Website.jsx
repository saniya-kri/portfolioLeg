import React from "react";
import "../App.css";
import { card1Img, card2Img } from "../utils";
import { card3Img, card4Img } from "../utils";
import { FaLink } from "react-icons/fa6";

const Website = () => {
  return (
    <div>
      <div className="screen-max-width mt-10 mx-auto">
        <div className=" w-full flex flex-wrap justify-center gap-10 items-center">
          <div>
            <div class="product-group group p-[1px] flex items-center justify-center relative select-none">
              <div class="absolute top-5 right-5 bg-red-500 p-0.5 px-2 rounded-[2px] text-xs z-30 shadow-lg">
                DEMO
              </div>
              <div class="relative z-20 group p-[10px] glassmorph rounded-lg z-1 border border-gray-700 bg-zinc">
                <div class="relative h-[200px] w-[300px] flex flex-row items-center justify-center rounded-md overflow-hidden border border-gray-700 img-area">
                  <img
                    alt="image1"
                    draggable="false"
                    loading="lazy"
                    width="300"
                    height="200"
                    decoding="async"
                    data-nimg="1"
                    className="image_one text-transparent"
                    src={card1Img}
                  />

                  <img
                    alt="image2"
                    draggable="false"
                    loading="lazy"
                    width="300"
                    height="200"
                    decoding="async"
                    data-nimg="1"
                    className="image_two text-transparent"
                    src={card2Img}
                  />
                </div>
                <div class="pt-[10px] rounded-b-lg p-5">
                    <div class="text-[10px] text-[#9a9a9b]">
                      Clone Website of Hypedrop.com
                    </div>
                    <div class="w-full flex flex-row items-center justify-between">
                      <div class="text-1xl font-medium">Hypedrop</div>
                      <div  className="text-[12px] flex items-center text-black font-semibold bg-blue px-4 py-1 rounded-sm" >
                        <FaLink className="mx-2"/>
                        <a href="#" className="cursor-pointer">Link</a>
                    </div>
                    </div>
                  </div>
              </div>
            </div>
          </div>

          <div>
            <div class="product-group group p-[1px] flex items-center justify-center relative select-none">
              <div class="absolute top-5 right-5 bg-red-500 p-0.5 px-2 rounded-[2px] text-xs z-30 shadow-lg">
                DEMO
              </div>
              <div class="relative z-20 group p-[10px] glassmorph rounded-lg z-1 border border-gray-700 bg-zinc">
                <div class="relative h-[200px] w-[300px] flex flex-row items-center justify-center rounded-md overflow-hidden border border-gray-700 img-area">
                  <img
                    alt="image1"
                    draggable="false"
                    loading="lazy"
                    width="300"
                    height="200"
                    decoding="async"
                    data-nimg="1"
                    className="image_one text-transparent"
                    src={ card3Img}
                  />

                  <img
                    alt="image2"
                    draggable="false"
                    loading="lazy"
                    width="300"
                    height="200"
                    decoding="async"
                    data-nimg="1"
                    className="image_two text-transparent"
                    src={ card4Img}
                  />
                </div>
                <div class="pt-[10px] rounded-b-lg p-5">
                    <div class="text-[10px] text-[#9a9a9b]">
                      Clone Website of Hypedrop.com
                    </div>
                    <div class="w-full flex flex-row items-center justify-between">
                      <div class="text-1xl font-medium">Hypedrop</div>
                      <div  className="text-[12px] flex items-center text-black font-semibold bg-blue px-4 py-1 rounded-sm" >
                        <FaLink className="mx-2"/>
                        <a href="#" className="cursor-pointer">Link</a>
                    </div>
                    </div>
                  </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Website;
