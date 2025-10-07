"use client"

import { motion } from "framer-motion";
import {Swiper, SwiperSlide} from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import {BsArrowUpRight,BsGithub} from "react-icons/bs" 
import { useState } from "react";
import Link from "next/link";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import Image from "next/image";
import WorkSliderBtns from "@/components/workSlider";

const projects = [
    {
        num:"01",
        category:"Full Stack Project",
        title:"E-Commerce Store",
        description:"Full-stack developer who built a complete e-commerce store using Next.js, React, Tailwind CSS, Prisma, and PostgreSQL. Developed responsive user interfaces, managed server-side rendering, handled database operations, and implemented secure payment integrations to deliver a seamless shopping experience.",
        stack:[{name:"Next.js"},{name:"React"},{name:"Tailwind"},{name:"Prisma"},{name:"PostgreSQL"}],
        image:'/assets/work/A4 (1).jpg',
        live:"https://e-commerce-store-two-ivory.vercel.app/",
        github:"https://github.com/GetoarNishefci/e-commerce-store"
    },
     {
        num:"02",
        category:"Full Stack Project",
        title:"E-Commerce Admin Dashboard",
        description:"Full-stack developer who built a comprehensive admin dashboard using Next.js, React, Tailwind CSS, Prisma, and PostgreSQL. Developed complete product management system including creating products, categories, billboards, colors, and photo sizes. Implemented order monitoring and management features to track and process customer orders efficiently.",
        stack:[{name:"Next.js"},{name:"React"},{name:"Tailwind"},{name:"Prisma"},{name:"PostgreSQL"}],
        image:'/assets/work/Gray Simple Shapes Blank A4 Document Landscape.png',
        live:"https://e-commerce-psi-blue.vercel.app/",
        github:"https://github.com/GetoarNishefci/e-commerce"
    },
       {
        num:"03",
        category:"Full Stack",
        title:"Pabau Clinic Software",
        description:"Full Stack Developer at Pabau Clinic Software, building scalable healthcare solutions using React, Next.js, Node.js, and SQL databases. Developed reusable components, implemented bridge APIs and middleware, wrote end-to-end tests with Playwright, participated in code reviews, and mentored interns to support team growth and maintain high code quality standards.",
        stack:[{name:"Next.js"},{name:"React"},{name:"Node.js"},{name:"Prisma"},{name:"PostgreSQL"},{name:"MySQL"},{name:"GraphQL"},{name:"CSS"}],
        image:'/assets/work/1ba17212-d415-45bf-96e6-dc4b76ce5891.jpg',
        live:"https://pabau.com/",
        github:"/"
    },
]

const Work = () =>{
    const [project,setProject]= useState(projects[0]);


    const handleSlideChange = (swiper:SwiperType ) => {
const currentIndex = swiper.activeIndex;
        
setProject(projects[currentIndex]); 
    }

    return( 
        <motion.section initial={{opacity:0}} animate={{opacity:1,transition:{delay:2,duration:0.4,ease:"easeIn"}}} className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0">
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row xl:gap-[30px]">
                    <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
                        <div className="flex flex-col gap-[30px] h-[50%]">
                            <h1 className="text-xl">{project.title}</h1>
                          <div
  className="text-8xl leading-none font-extrabold"
  style={{
    WebkitTextStroke: "2px black",
    color: "transparent",
  }}
>
  {project.num}
</div>
<h2 className="text-[42px] font-bold leading-none group-hover:text-sky-500 transition-all duration-500 capitalize">
  {project.category}
</h2>
                <p className="text-black/60">{project.description}</p>
<ul className="flex flex-wrap gap-x-2 gap-y-4 xl:gap-x-4 xl:gap-y-0">
  {project.stack.map((item, index) => (
    <li key={index} className="text-xl text-sky-500">
      {item.name}
      {index !== project.stack.length - 1 && ','}
    </li>
  ))}
</ul>

                <div className="border border-black/20"></div>
                <div className="flex items-center gap-4">
                    <Link href={project.live}>
                    <TooltipProvider delayDuration={100}>
                        <Tooltip>
                            <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-sky-50 flex justify-center items-center group">
                                <BsArrowUpRight className="text-3xl group-hover:text-sky-500 transition-all duration-300" />
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Live Project</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                    </Link>
                     <Link href={project.github}>
                    <TooltipProvider delayDuration={100}>
                        <Tooltip>
                            <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-sky-50 flex justify-center items-center group">
                                <BsGithub className="text-3xl group-hover:text-sky-500 transition-all duration-300" />
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>GitHub Repository</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                    </Link>
                </div>

                        </div>
                    </div>
                    <div className="w-full xl:w-[50%]">
                        <Swiper spaceBetween={30} slidesPerView={1} className="xl:h-[520px] mb-12" 
                        onSlideChange={handleSlideChange}>
                            {projects.map((item,index)=>{
                                return(
                                    <SwiperSlide key={index} className="w-full"><div className="h-[460px]  relative group flex justify-center items-center bg-sky-50">
                                        <div className="relative w-full h-full">
                                        <Image src={item.image} fill className="object-cover" alt=""/>
                                        </div>
                                        </div></SwiperSlide>
                                )
                            })}
                          <WorkSliderBtns
  containerStyles={`
    absolute top-1/2 transform -translate-y-1/2 
    left-2 right-2 flex justify-between z-20
    xl:top-120 xl:bottom-0 xl:left-auto xl:right-0 xl:w-max xl:justify-none  xl:gap-2 xl:mt-1
  `}
  btnStyles="
    bg-sky-200 hover:bg-sky-500-hover text-primary text-[22px] w-[44px] h-[44px]
    flex justify-center items-center transition-all
  "
/>

                        </Swiper>
                    </div>
                </div>
            </div>
        </motion.section>
    )
}

export default Work;