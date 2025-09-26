"use client"

import { usePathname } from "next/navigation";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "./ui/sheet";
import {CiMenuFries} from "react-icons/ci"
import Link from "next/link";

const links = [
    {
        name:"home",
        path:"/"
    },
    {
        name:"services",
        path:"/services"
    },
    {
        name:"resume",
        path:"/resume"
    },
    {
        name:"work",
        path:"/work"
    },
    {
        name:"contact",
        path:"/contact"
    },
]

const MobileNav = () =>{

    const pathName = usePathname()
    return (
       <Sheet>
        <SheetTrigger className="flex justify-center items-center">
            <CiMenuFries className="text-[32px] text-sky-500" />
        </SheetTrigger>
        <SheetContent className="flex flex-col">
                <div className="mt-32 mb-40 text-center text-2xl">
                    <Link href="/">
                    <SheetTitle className="text-4xl font-semibold">
                        Getoar<span className="text-sky-500">.</span>
                    </SheetTitle>
                    </Link>

                </div>
                <nav className="flex flex-col justify-center items-center gap-8">
                    {links.map((link,index )=>{
                        return <Link href={link.path} key={index} className={`${link.path === pathName && "text-sky-500 border-b-2 border-sky-500"} text-xl
                        capitalize hover:text-sky-500 transition-all
                        `}>
                             {link.name}
                        </Link>
                    })}
                </nav>
        </SheetContent>
       </Sheet>
    )
}

export default MobileNav;