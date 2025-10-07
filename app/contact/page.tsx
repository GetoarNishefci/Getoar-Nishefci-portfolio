"use client"

import { FaPhoneAlt,FaEnvelope,FaMapMarkerAlt} from "react-icons/fa"
import { motion } from "framer-motion"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"


        const info = [
            {
                icon:<FaPhoneAlt/>,
                title:"Phone",
                description:"+383 44 170 067"
            },
            {
                icon:<FaEnvelope/>,
                title:"Email",
                description:"getoar.n1@gmail.com"
            },
            {
                icon:<FaMapMarkerAlt/>,
                title:"Address",
                description:"Podujeva, Kosovo, 11000"
            },
        ]

const Contact = () =>{
    return(

          <motion.section className="py-6" initial={{opacity:0}} animate={{opacity:1,transition:{delay:2,duration:0.4,ease:"easeIn"}}}>
                    <div className="container mx-auto">
                            <div className="flex flex-col xl:flex-row gap-[30px]">
                                    <div className="xl:h-[54%] order-2 xl:order-none xl:w-[60%]">
                                        <form className="flex flex-col gap-6 p-10 bg-sky-50 rounded-xxl">
                                                <h3 className="text-4xl text-sky-500">Let's work together</h3>
                                                <p className="text-black/60">lasdkj lkjdsalkjdkl ;asdjlksdaj askldjklas</p>

                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                        <Input type="firstname" placeholder="Firstname"></Input>
                                                        <Input type="lastname" placeholder="Lastname"></Input>
                                                        <Input type="email" placeholder="Email address"></Input>
                                                        <Input type="phone" placeholder="Phone number"></Input>
                                                </div>
                                                     <Textarea
                                            className="h-[200px]"
                                            placeholder="Type your message here."
                                        />

                                        <Button size="md" className="max-w-40">
                                            Send Message
                                        </Button>
                                        </form>
                                    </div>
                                <div className="flex-1 flex items-center ml-5 xl:ml-0 xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
  <ul className="flex flex-col gap-10">
    {info.map((item, index) => {
      return (
        <li key={index} className="flex items-center gap-6">
          <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-sky-50 text-sky-500 rounded-md flex items-center justify-center">
            <div className="text-[28px]">{item.icon}</div>
          </div>
          <div className="flex-1">
            <p className="text-black/60">{item.title}</p>
            <h3 className="text-xl">{item.description}</h3>
          </div>
        </li>
      );
    })}
  </ul>
</div>

                            </div>
                    </div>
          </motion.section>
            
        
    )
}

export default Contact;