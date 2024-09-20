import React from "react";
import { nextImg } from "../utils";
import { reactImg } from "../utils";
import { typeScriptImg } from "../utils";
import { javaScriptImg } from "../utils";
import { htmlImg } from "../utils";
import { tailwindImg} from "../utils";
import { cssImg} from "../utils";
import { nodeJsImg} from "../utils";
import { mongoDbImg} from "../utils";
import { supabaseImg} from "../utils";
import { postgreSqlImg} from "../utils";
import { githubImg} from "../utils";
import { awsImg} from "../utils";
import { netlifyImg} from "../utils";
import { vercelImg} from "../utils";
import { ubuntuImg} from "../utils";
import { firebaseImg} from "../utils";
import {  vsCodeImg} from "../utils";
import { postmanImg} from "../utils";
import { framerImg} from "../utils";
import { figmaImg} from "../utils";
import { photoshopImg} from "../utils";

const Language = () => {
  return (
    <div>
      <div className="w-11/12 py-10 mt-10 flex flex-col gap-5 mx-auto">
        <div className="flex gap-5 w-full px-[16px] md:px-[50px] lg:px-[250px] justify-center">
          <div className="flex w-fit justify-center flex-wrap gap-4 md:gap-6">
                {/* Next */}
            <div>
              <div className="group select-none relative">
                <div className="z-20 duration-200 relative p-[1px] bg-[#ffffff27] rounded-xl bg-gradient-to-r from-[#cbcccc] to-[#797979]">
                  <div className="h-[80px] w-full bg-black rounded-t-xl flex items-center justify-center">
                    <img
                      draggable="false"
                      alt="logo"
                      loading="lazy"
                      width="40"
                      height="40"
                      decoding="async"
                      data-nimg="1"
                //       style="color:transparent"
                      src={nextImg}
                    />
                  </div>
                  <div className="w-[95px] h-[30px] rounded-b-xl">
                    <div className="flex items-center justify-center h-full duration-100 text-sm font-semibold">
                      Next
                    </div>
                  </div>
                </div>
                <div className="absolute duration-200 top-10 h-[50px] w-full bg-gradient-to-r from-[#cbcccc] to-[#797979] blur-3xl"></div>
              </div>
            </div>

          {/* React */}
            <div>
              <div className="group select-none relative">
                <div className="z-20 duration-200 relative p-[1px] bg-[#ffffff27] rounded-xl bg-gradient-to-r from-[#019ae9] to-[#00dfd8]">
                  <div className="h-[80px] w-full bg-black rounded-t-xl flex items-center justify-center">
                    <img
                      draggable="false"
                      alt="logo"
                      loading="lazy"
                      width="40"
                      height="40"
                      decoding="async"
                      data-nimg="1"
                //       style="color:transparent"
                      src={reactImg}
                    />
                  </div>
                  <div className="w-[95px] h-[30px] rounded-b-xl">
                    <div className="flex items-center justify-center h-full duration-100 text-sm font-semibold">
                      React
                    </div>
                  </div>
                </div>
                <div class="absolute duration-200 top-10 h-[50px] w-full bg-gradient-to-r from-[#019ae9] to-[#00dfd8] blur-3xl"></div>
              </div>
            </div>


          {/* Typescript */}

            <div>
              <div className="group select-none relative">
                <div className="z-20 duration-200 relative p-[1px] bg-[#ffffff27] rounded-xl bg-gradient-to-r from-[#3178c6] to-[#008bd3]">
                  <div className="h-[80px] w-full bg-black rounded-t-xl flex items-center justify-center">
                    <img
                      draggable="false"
                      alt="logo"
                      loading="lazy"
                      width="40"
                      height="40"
                      decoding="async"
                      data-nimg="1"
                //       style="color:transparent"
                      src={typeScriptImg}
                    />
                  </div>
                  <div className="w-[95px] h-[30px] rounded-b-xl">
                    <div className="flex items-center justify-center h-full duration-100 text-sm font-semibold">
                    Typescript
                    </div>
                  </div>
                </div>
                <div class="absolute duration-200 top-10 h-[50px] w-full bg-gradient-to-r from-[#3178c6] to-[#008bd3] blur-3xl"></div>
              </div>
            </div>


          {/* javascript */}

            <div>
              <div className="group select-none relative">
                <div className="z-20 duration-200 relative p-[1px] bg-[#ffffff27] rounded-xl bg-gradient-to-r from-[#f7df1e] to-[#c3b017]">
                  <div className="h-[80px] w-full bg-black rounded-t-xl flex items-center justify-center">
                    <img
                      draggable="false"
                      alt="logo"
                      loading="lazy"
                      width="40"
                      height="40"
                      decoding="async"
                      data-nimg="1"
                //       style="color:transparent"
                      src={javaScriptImg}
                    />
                  </div>
                  <div className="w-[95px] h-[30px] rounded-b-xl">
                    <div className="flex items-center justify-center h-full duration-100 text-sm font-semibold">
                    javascript
                    </div>
                  </div>
                </div>
                <div class="absolute duration-200 top-10 h-[50px] w-full bg-gradient-to-r from-[#f7df1e] to-[#c3b017] blur-3xl"></div>
              </div>
            </div>


          {/* javascript */}

            <div>
              <div className="group select-none relative">
              <div className="z-20 duration-200 relative p-[1px] bg-[#ffffff27] rounded-xl bg-gradient-to-r from-[#e44f26] to-[#ff872c]">
                <div className="h-[80px] w-full bg-black rounded-t-xl flex items-center justify-center">
                    <img
                      draggable="false"
                      alt="logo"
                      loading="lazy"
                      width="40"
                      height="40"
                      decoding="async"
                      data-nimg="1"
                //       style="color:transparent"
                      src={htmlImg}
                    />
                  </div>
                  <div className="w-[95px] h-[30px] rounded-b-xl">
                    <div className="flex items-center justify-center h-full duration-100 text-sm font-semibold">
                    HTML
                    </div>
                  </div>
                </div>
                <div class="absolute duration-200 top-10 h-[50px] w-full bg-gradient-to-r from-[#e44f26] to-[#ff872c] blur-3xl"></div>
              </div>
            </div>

          {/* tailwindImg */}

            <div>
              <div className="group select-none relative">
                <div className="z-20 duration-200 relative p-[1px] bg-[#ffffff27] rounded-xl bg-gradient-to-r from-[#1fa3bc] to-[#13c9b7]">
                  <div className="h-[80px] w-full bg-black rounded-t-xl flex items-center justify-center">
                    <img
                      draggable="false"
                      alt="logo"
                      loading="lazy"
                      width="40"
                      height="40"
                      decoding="async"
                      data-nimg="1"
                //       style="color:transparent"
                      src={tailwindImg}
                    />
                  </div>
                  <div className="w-[95px] h-[30px] rounded-b-xl">
                    <div className="flex items-center justify-center h-full duration-100 text-sm font-semibold">
                    Tailwind
                    </div>
                  </div>
                </div>
                <div class="absolute duration-200 top-10 h-[50px] w-full bg-gradient-to-r from-[#1fa3bc] to-[#13c9b7] blur-3xl"></div>
              </div>
            </div>

          {/* css */}

            <div>
              <div className="group select-none relative">
                <div className="z-20 duration-200 relative p-[1px] bg-[#ffffff27] rounded-xl bg-gradient-to-r from-[#1572b6] to-[#33a9dc]">
                  <div className="h-[80px] w-full bg-black rounded-t-xl flex items-center justify-center">
                    <img
                      draggable="false"
                      alt="logo"
                      loading="lazy"
                      width="40"
                      height="40"
                      decoding="async"
                      data-nimg="1"
                //       style="color:transparent"
                      src={cssImg}
                    />
                  </div>
                  <div className="w-[95px] h-[30px] rounded-b-xl">
                    <div className="flex items-center justify-center h-full duration-100 text-sm font-semibold">
                    CSS
                    </div>
                  </div>
                </div>
                <div class="absolute duration-200 top-10 h-[50px] w-full bg-gradient-to-r from-[#1572b6] to-[#33a9dc] blur-3xl"></div>
              </div>
            </div>


          {/* Node js */}

            <div>
              <div className="group select-none relative">
                <div className="z-20 duration-200 relative p-[1px] bg-[#ffffff27] rounded-xl bg-gradient-to-r from-[#63975e] to-[#7cc327]">
                  <div className="h-[80px] w-full bg-black rounded-t-xl flex items-center justify-center">
                    <img
                      draggable="false"
                      alt="logo"
                      loading="lazy"
                      width="40"
                      height="40"
                      decoding="async"
                      data-nimg="1"
                //       style="color:transparent"
                      src={nodeJsImg}
                    />
                  </div>
                  <div className="w-[95px] h-[30px] rounded-b-xl">
                    <div className="flex items-center justify-center h-full duration-100 text-sm font-semibold">
                    Node Js
                    </div>
                  </div>
                </div>
                <div class="absolute duration-200 top-10 h-[50px] w-full bg-gradient-to-r from-[#63975e] to-[#7cc327] blur-3xl"></div>
              </div>
            </div>


          {/* prisma */}

            <div>
              <div className="group select-none relative">
                <div className="z-20 duration-200 relative p-[1px] bg-[#ffffff27] rounded-xl bg-gradient-to-r from-[#cbcccc] to-[#797979]">
                  <div className="h-[80px] w-full bg-black rounded-t-xl flex items-center justify-center">
                    <img
                      draggable="false"
                      alt="logo"
                      loading="lazy"
                      width="40"
                      height="40"
                      decoding="async"
                      data-nimg="1"
                //       style="color:transparent"
                      src={nodeJsImg}
                    />
                  </div>
                  <div className="w-[95px] h-[30px] rounded-b-xl">
                    <div className="flex items-center justify-center h-full duration-100 text-sm font-semibold">
                    Prisma
                    </div>
                  </div>
                </div>
                <div class="absolute duration-200 top-10 h-[50px] w-full bg-gradient-to-r from-[#cbcccc] to-[#797979] blur-3xl"></div>
              </div>
            </div>


          {/* mongoDb*/}

            <div>
              <div className="group select-none relative">
                <div className="z-20 duration-200 relative p-[1px] bg-[#ffffff27] rounded-xl bg-gradient-to-r from-[#00af42] to-[#009546]">
                  <div className="h-[80px] w-full bg-black rounded-t-xl flex items-center justify-center">
                    <img
                      draggable="false"
                      alt="logo"
                      loading="lazy"
                      width="40"
                      height="40"
                      decoding="async"
                      data-nimg="1"
                //       style="color:transparent"
                      src={mongoDbImg}
                    />
                  </div>
                  <div className="w-[95px] h-[30px] rounded-b-xl">
                    <div className="flex items-center justify-center h-full duration-100 text-sm font-semibold">
                    Mongo DB
                    </div>
                  </div>
                </div>
                <div class="absolute duration-200 top-10 h-[50px] w-full bg-gradient-to-r from-[#00af42] to-[#009546] blur-3xl"></div>
              </div>
            </div>


          {/* supabase*/}

            <div>
              <div className="group select-none relative">
                <div className="z-20 duration-200 relative p-[1px] bg-[#ffffff27] rounded-xl bg-gradient-to-r from-[#3ecf8e] to-[#248f5f]">
                  <div className="h-[80px] w-full bg-black rounded-t-xl flex items-center justify-center">
                    <img
                      draggable="false"
                      alt="logo"
                      loading="lazy"
                      width="40"
                      height="40"
                      decoding="async"
                      data-nimg="1"
                //       style="color:transparent"
                      src={supabaseImg}
                    />
                  </div>
                  <div className="w-[95px] h-[30px] rounded-b-xl">
                    <div className="flex items-center justify-center h-full duration-100 text-sm font-semibold">
                    Supabase
                    </div>
                  </div>
                </div>
                <div class="absolute duration-200 top-10 h-[50px] w-full bg-gradient-to-r from-[#3ecf8e] to-[#248f5f] blur-3xl"></div>
              </div>
            </div>


          {/* supabase*/}

            <div>
              <div className="group select-none relative">
                <div className="z-20 duration-200 relative p-[1px] bg-[#ffffff27] rounded-xl bg-gradient-to-r from-[#336791] to-[#336791]">
                  <div className="h-[80px] w-full bg-black rounded-t-xl flex items-center justify-center">
                    <img
                      draggable="false"
                      alt="logo"
                      loading="lazy"
                      width="40"
                      height="40"
                      decoding="async"
                      data-nimg="1"
                //       style="color:transparent"
                      src={postgreSqlImg}
                    />
                  </div>
                  <div className="w-[95px] h-[30px] rounded-b-xl">
                    <div className="flex items-center justify-center h-full duration-100 text-sm font-semibold">
                    PostgreSQL
                    </div>
                  </div>
                </div>
                <div class="absolute duration-200 top-10 h-[50px] w-full bg-gradient-to-r from-[#336791] to-[#336791] blur-3xl"></div>
              </div>
            </div>


          </div>
        </div>

        <div className="mx-auto">
        <div className="mt-5 text-[#cccccc] text-2xl sm:text-4xl dancing-font opacity-0 text-center p-10" id='know'>Hosting Platform</div>
        <div className="flex gap-5 w-full px-[16px] md:px-[50px] lg:px-[250px] justify-center">
          <div className="flex w-fit justify-center flex-wrap gap-4 md:gap-6">

        {/* github */}
            <div>
              <div className="group select-none relative">
                <div className="z-20 duration-200 relative p-[1px] bg-[#ffffff27] rounded-xl bg-gradient-to-r from-[#cbcccc] to-[#797979]">
                  <div className="h-[80px] w-full bg-black rounded-t-xl flex items-center justify-center">
                    <img
                      draggable="false"
                      alt="logo"
                      loading="lazy"
                      width="40"
                      height="40"
                      decoding="async"
                      data-nimg="1"
                //       style="color:transparent"
                      src={githubImg}
                    />
                  </div>
                  <div className="w-[95px] h-[30px] rounded-b-xl">
                    <div className="flex items-center justify-center h-full duration-100 text-sm font-semibold">
                      Git Hub
                    </div>
                  </div>
                </div>
                <div className="absolute duration-200 top-10 h-[50px] w-full bg-gradient-to-r from-[#cbcccc] to-[#797979] blur-3xl"></div>
              </div>
            </div>

          {/* aws */}
            <div>
              <div className="group select-none relative">
                <div className="z-20 duration-200 relative p-[1px] bg-[#fffff27] rounded-xl bg-gradient-to-r from-[#f58536] to-[#9d5025]">
                  <div className="h-[80px] w-full bg-black rounded-t-xl flex items-center justify-center">
                    <img
                      draggable="false"
                      alt="logo"
                      loading="lazy"
                      width="40"
                      height="40"
                      decoding="async"
                      data-nimg="1"
                //       style="color:transparent"
                      src={awsImg}
                    />
                  </div>
                  <div className="w-[95px] h-[30px] rounded-b-xl">
                    <div className="flex items-center justify-center h-full duration-100 text-sm font-semibold">
                      AWS
                    </div>
                  </div>
                </div>
                <div class="absolute duration-200 top-10 h-[50px] w-full bg-gradient-to-r from-[#019ae9] to-[#00dfd8] blur-3xl"></div>
              </div>
            </div>


        {/* netlify */}

          <div>
              <div className="group select-none relative">
                <div className="z-20 duration-200 relative p-[1px] bg-[#ffffff27] rounded-xl bg-gradient-to-r from-[#1fa3bc] to-[#13c9b7]">
                  <div className="h-[80px] w-full bg-black rounded-t-xl flex items-center justify-center">
                    <img
                      draggable="false"
                      alt="logo"
                      loading="lazy"
                      width="40"
                      height="40"
                      decoding="async"
                      data-nimg="1"
                //       style="color:transparent"
                      src={netlifyImg}
                    />
                  </div>
                  <div className="w-[95px] h-[30px] rounded-b-xl">
                    <div className="flex items-center justify-center h-full duration-100 text-sm font-semibold">
                    Netlify
                    </div>
                  </div>
                </div>
                <div class="absolute duration-200 top-10 h-[50px] w-full bg-gradient-to-r from-[#1fa3bc] to-[#13c9b7] blur-3xl"></div>
              </div>
            </div>


          {/* versel */}

          <div>
              <div className="group select-none relative">
                <div className="z-20 duration-200 relative p-[1px] bg-[#ffffff27] rounded-xl bg-gradient-to-r from-[#cbcccc] to-[#797979]">
                  <div className="h-[80px] w-full bg-black rounded-t-xl flex items-center justify-center">
                    <img
                      draggable="false"
                      alt="logo"
                      loading="lazy"
                      width="40"
                      height="40"
                      decoding="async"
                      data-nimg="1"
                //       style="color:transparent"
                      src={vercelImg}
                    />
                  </div>
                  <div className="w-[95px] h-[30px] rounded-b-xl">
                    <div className="flex items-center justify-center h-full duration-100 text-sm font-semibold">
                      Vercel
                    </div>
                  </div>
                </div>
                <div className="absolute duration-200 top-10 h-[50px] w-full bg-gradient-to-r from-[#cbcccc] to-[#797979] blur-3xl"></div>
              </div>
            </div>


          {/* ubuntu */}

            <div>
              <div className="group select-none relative">
              <div className="z-20 duration-200 relative p-[1px] bg-[#ffffff27] rounded-xl bg-gradient-to-r from-[#e44f26] to-[#ff872c]">
                <div className="h-[80px] w-full bg-black rounded-t-xl flex items-center justify-center">
                    <img
                      draggable="false"
                      alt="logo"
                      loading="lazy"
                      width="40"
                      height="40"
                      decoding="async"
                      data-nimg="1"
                //       style="color:transparent"
                      src={ubuntuImg}
                    />
                  </div>
                  <div className="w-[95px] h-[30px] rounded-b-xl">
                    <div className="flex items-center justify-center h-full duration-100 text-sm font-semibold">
                    Ubuntu
                    </div>
                  </div>
                </div>
                <div class="absolute duration-200 top-10 h-[50px] w-full bg-gradient-to-r from-[#e44f26] to-[#ff872c] blur-3xl"></div>
              </div>
            </div>
          {/* javascript */}

            <div>
              <div className="group select-none relative">
              <div className="z-20 duration-200 relative p-[1px] bg-[#ffffff27] rounded-xl bg-gradient-to-r from-[#ffa712] to-[#fcca3f]">
                <div className="h-[80px] w-full bg-black rounded-t-xl flex items-center justify-center">
                    <img
                      draggable="false"
                      alt="logo"
                      loading="lazy"
                      width="40"
                      height="40"
                      decoding="async"
                      data-nimg="1"
                //       style="color:transparent"
                      src={firebaseImg}
                    />
                  </div>
                  <div className="w-[95px] h-[30px] rounded-b-xl">
                    <div className="flex items-center justify-center h-full duration-100 text-sm font-semibold">
                    Firebase
                    </div>
                  </div>
                </div>
                <div class="absolute duration-200 top-10 h-[50px] w-full bg-gradient-to-r from-[#e44f26] to-[#ff872c] blur-3xl"></div>
              </div>
            </div>




          </div>
        </div>
        </div>

        <div className="mx-auto">
        <div className="mt-5 text-[#cccccc] text-2xl sm:text-4xl dancing-font opacity-0 text-center p-10" id='know'>Tools</div>
        <div className="flex gap-5 w-full px-[16px] md:px-[50px] lg:px-[250px] justify-center">
          <div className="flex w-fit justify-center flex-wrap gap-4 md:gap-6">

        {/* vscode */}
            <div>
              <div className="group select-none relative">
                <div className="z-20 duration-200 relative p-[1px] bg-[#ffffff27] rounded-xl bg-gradient-to-r from-[#24abf2] to-[#0075b7]">
                  <div className="h-[80px] w-full bg-black rounded-t-xl flex items-center justify-center">
                    <img
                      draggable="false"
                      alt="logo"
                      loading="lazy"
                      width="40"
                      height="40"
                      decoding="async"
                      data-nimg="1"
                //       style="color:transparent"
                      src={vsCodeImg}
                    />
                  </div>
                  <div className="w-[95px] h-[30px] rounded-b-xl">
                    <div className="flex items-center justify-center h-full duration-100 text-sm font-semibold">
                      Visual Code
                    </div>
                  </div>
                </div>
                <div className="absolute duration-200 top-10 h-[50px] w-full bg-gradient-to-tr from-[#24abf2] to-[#0075b7] blur-3xl"></div>
              </div>
            </div>

          {/* postman */}
            <div>
              <div className="group select-none relative">
                <div className="z-20 duration-200 relative p-[1px] bg-[#fffff27] rounded-xl bg-gradient-to-r from-[#f58536] to-[#9d5025]">
                  <div className="h-[80px] w-full bg-black rounded-t-xl flex items-center justify-center">
                    <img
                      draggable="false"
                      alt="logo"
                      loading="lazy"
                      width="40"
                      height="40"
                      decoding="async"
                      data-nimg="1"
                //       style="color:transparent"
                      src={postmanImg}
                    />
                  </div>
                  <div className="w-[95px] h-[30px] rounded-b-xl">
                    <div className="flex items-center justify-center h-full duration-100 text-sm font-semibold">
                    Postman
                    </div>
                  </div>
                </div>
                <div className="absolute duration-200 top-10 h-[50px] w-full bg-gradient-to-tr from-[#f58536] to-[#9d5025] blur-3xl"></div>
              </div>
            </div>


        {/* framer */}

          <div>
              <div className="group select-none relative">
                <div className="z-20 duration-200 relative p-[1px] bg-[#ffffff27] rounded-xl bg-gradient-to-r from-[#88ddff] to-[#00aaff]">
                  <div className="h-[80px] w-full bg-black rounded-t-xl flex items-center justify-center">
                    <img
                      draggable="false"
                      alt="logo"
                      loading="lazy"
                      width="40"
                      height="40"
                      decoding="async"
                      data-nimg="1"
                //       style="color:transparent"
                      src={framerImg}
                    />
                  </div>
                  <div className="w-[95px] h-[30px] rounded-b-xl">
                    <div className="flex items-center justify-center h-full duration-100 text-sm font-semibold">
                    Framer
                    </div>
                  </div>
                </div>
                <div className="absolute duration-200 top-10 h-[50px] w-full bg-gradient-to-tr from-[#88ddff] to-[#00aaff] blur-3xl"></div>
              </div>
            </div>


          {/* figma */}

          <div>
              <div className="group select-none relative">
                <div className="z-20 duration-200 relative p-[1px] bg-[#ffffff27] rounded-xl bg-gradient-to-r from-[#7928ca] to-[#ff0080]">
                  <div className="h-[80px] w-full bg-black rounded-t-xl flex items-center justify-center">
                    <img
                      draggable="false"
                      alt="logo"
                      loading="lazy"
                      width="40"
                      height="40"
                      decoding="async"
                      data-nimg="1"
                //       style="color:transparent"
                      src={figmaImg}
                    />
                  </div>
                  <div className="w-[95px] h-[30px] rounded-b-xl">
                    <div className="flex items-center justify-center h-full duration-100 text-sm font-semibold">
                      Figma
                    </div>
                  </div>
                </div>
                <div className="absolute duration-200 top-10 h-[50px] w-full bg-gradient-to-tr from-[#7928ca] to-[#ff0080] blur-3xl"></div>
              </div>
            </div>


          {/* photoshop */}

            <div>
              <div className="group select-none relative">
              <div className="z-20 duration-200 relative p-[1px] bg-[#ffffff27] rounded-xl bg-gradient-to-r from-[#24abf2] to-[#0075b7]">
                <div className="h-[80px] w-full bg-black rounded-t-xl flex items-center justify-center">
                    <img
                      draggable="false"
                      alt="logo"
                      loading="lazy"
                      width="40"
                      height="40"
                      decoding="async"
                      data-nimg="1"
                //       style="color:transparent"
                      src={photoshopImg}
                    />
                  </div>
                  <div className="w-[95px] h-[30px] rounded-b-xl">
                    <div className="flex items-center justify-center h-full duration-100 text-sm font-semibold">
                    Photoshop
                    </div>
                  </div>
                </div>
                <div className="absolute duration-200 top-10 h-[50px] w-full bg-gradient-to-tr from-[#24abf2] to-[#0075b7] blur-3xl"></div>
              </div>
            </div>

          </div>
        </div>
        </div>
      
      </div>
    </div>
  );
};

export default Language;
