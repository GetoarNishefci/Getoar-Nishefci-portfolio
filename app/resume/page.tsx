"use client"

import {FaHtml5,FaCss3,FaJs,FaReact,FaNodeJs} from "react-icons/fa";
import {  SiNextdotjs, SiPostgresql,SiTailwindcss,SiMysql,SiGraphql,SiTypescript,} from "react-icons/si";
import { motion} from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

    const about = {
        title:"About Me",
        description:"I am Getoar Nishefci, a Software Developer with 3 years of experience in building and maintaining web applications. Skilled in React, Next.js, Node.js, GraphQL, Prisma, and SQL databases (MySQL & PostgreSQL), with a strong focus on writing clean, scalable, and maintainable code.",
        info:[
            {name:"Name", value:"Getoar Nishefci"},
            {name:"Phone", value:"+383 44 170 067"},
            {name:"Experience", value:"3 Years"},
            {name:"Nationality", value:"Albanian"},
            {name:"Email", value:"getoar.n1@gmail.com"},
            {name:"Languages", value:"Albanian, English"},
        ]
    }

    const experiences = {
                title:"My Experience",
    description: "Worked extensively with React, Next.js, GraphQL, Prisma, Node.js, MySQL, and PostgreSQL, building scalable front-end and back-end solutions. Built and optimized reusable components, custom hooks, and helper functions. Implemented bridge APIs and middleware interceptors to streamline integrations. Wrote end-to-end tests with Playwright, participated in code reviews, and mentored interns.",
                items:[
            {
                company:"Pabau Clinic Software",
                position:"Full Stack Developer",
                duration:"2023 - 2025",
            }
         ]
    }

    const education = {
        title:"My Education",
        description:"Computer Science with a focus on software engineering, algorithms, database systems, mathematics, and application development. Developing both theoretical knowledge and practical skills in designing and building software solutions.",
        items:[
            {
                institution:"UBT College Higher Education Institution",
                degree:"Bachelor in Computer Science And Engineering",
                duration:"2021",
            },
            {
                    institution:"Probit Academy",
                    degree:"Certificate in Full Stack Development",
                    duration:"2022",
            }
         ]
    }
    const skills = {
        title:"My Skills",
        description:"Skilled in React, Next.js, Node.js, GraphQL, Prisma, and SQL databases (MySQL & PostgreSQL), with a strong focus on writing clean, scalable, and maintainable code.",
        items:[
            {name:"HTML", icon:<FaHtml5 />},
            {name:"CSS", icon:<FaCss3 />},
            {name:"JavaScript", icon:<FaJs />},
            {name:"Typescript", icon:<SiTypescript />},
            {name:"React", icon:<FaReact />},
            {name:"Next.js", icon:<SiNextdotjs />},
            {name:"Node.js", icon:<FaNodeJs />},
            {name:"PostgreSQL", icon:<SiPostgresql />},
            {name:"MySQL", icon:<SiMysql />},       
            {name:"Graphql", icon:<SiGraphql />},       
            {name:"Tailwind CSS", icon:<SiTailwindcss />},
        ]
    }

const Resume = () =>{
    return(
        <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1,
            transition: { delay:2,duration: 0.4,ease: "easeIn" }
         }}
            className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
        >
        <div className="container mx-auto">
            <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
                <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
                    <TabsTrigger value="experience">Experience</TabsTrigger>
                    <TabsTrigger value="education">Education</TabsTrigger>
                    <TabsTrigger value="skills">Skills</TabsTrigger>
                    <TabsTrigger value="about">About Me</TabsTrigger>

                </TabsList>

                <div className="min-h-[70vh] w-full">
                      <TabsContent value="experience" className="w-full">
                     <div className="flex flex-col gap-[30px] text-center xl:text-left">
                            <h3 className="text-4xl font-bold">{experiences.title}</h3>
                            <p className="max-w-[600px] text-black/60 mx-auto xl:mx-0">{experiences.description}</p>
                            <ScrollArea className="h-[400px]">
                            <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                {experiences.items.map((item,index)=>{
                                    return (
                                        <li key={index} className="bg-sky-50 h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center
                                        items-center lg:items-start gap-1
                                        ">
                                            <span className="text-sky-500">{item.duration}</span>
                                            <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                                            <div className="flex items-center gap-3">
                                                <span className="w-[6px] h-[6px] rounded-full bg-sky-500"></span>
                                                <p className="text-black/60">{item.company}</p>
                                            </div>
                                        </li>
                                    )
                                })}
                            </ul>
                            </ScrollArea>
                        </div>
                    </TabsContent>  <TabsContent value="education" className="w-full">
 <div className="flex flex-col gap-[30px] text-center xl:text-left">
                            <h3 className="text-4xl font-bold">{education.title}</h3>
                            <p className="max-w-[600px] text-black/60 mx-auto xl:mx-0">{education.description}</p>
                            <ScrollArea className="h-[400px]">
                            <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                {education.items.map((item,index)=>{
                                    return (
                                        <li key={index} className="bg-sky-50 h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center
                                        items-center lg:items-start gap-1
                                        ">
                                            <span className="text-sky-500">{item.duration}</span>
                                            <h3 className="text-xl max-w-[360px] min-h-[60px] text-center lg:text-left">{item.degree}</h3>
                                            <div className="flex items-center gap-3">
                                                <span className="w-[6px] h-[6px] rounded-full bg-sky-500"></span>
                                                <p className="text-black/60">{item.institution}</p>
                                            </div>
                                        </li>
                                    )
                                })}
                            </ul>
                            </ScrollArea>
                        </div>  
                    </TabsContent> 
                     <TabsContent value="skills" className="w-full h-full">
                                <div className="flex flex-col gap-[30px]">
                                    <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                        <h3 className="text-4xl font-bold">{skills.title}</h3>
                                        <p className="max-w-[600px] text-black/60 mx-auto xl:mx-0">{skills.description}</p>
                                    </div>
                                    <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-4">
                                        {skills.items.map((item,index)=>{
                                            return (
                                                <li key={index}>
                                                    <TooltipProvider delayDuration={100}>
                                                        <Tooltip>
                                                            <TooltipTrigger className="w-full h-[150px] bg-sky-50 rounded-xl flex justify-center items-center group">
                                                                <div className="text-6xl group-hover:text-sky-500 transition-all duration-300">
                                                                    {item.icon}
                                                                </div>
                                                            </TooltipTrigger>
                                                            <TooltipContent>
                                                                <p className="capitalize">{item.name}</p>
                                                            </TooltipContent>
                                                        </Tooltip>
                                                    </TooltipProvider>
                                                </li>
                                            )
                                        })}
                                    </ul>

                                </div>
                    </TabsContent>
                         <TabsContent
    value="about"
    className="w-full text-center xl:text-left"
>
    <div className="flex flex-col gap-[30px]">
        <h3 className="text-4xl font-bold">{about.title}</h3>
        <p className="max-w-[600px] text-black/60 mx-auto xl:mx-0">
            {about.description}
        </p>
        <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[650px] mx-auto xl:mx-0">
            {about.info.map((item, index) => {
                return (
                    <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                        <span className="text-black/60">{item.name}</span>
                        <span className="text-xl">{item.value}</span>
                    </li>
                );
            })}
        </ul>
    </div>
</TabsContent>
                </div>
            </Tabs>
            </div>
        </motion.div>
    )
}

export default Resume;