import Link from "next/link"
import Nav from "./nav"
import { Button } from "./ui/button"
import MobileNav from "./mobileNav"

const Header = () =>{
    return (
        <header className="py-8 xl:py-12">
            <div className="container mx-auto flex justify-between items-center">
                <Link href='/'>
                        <h1 className="text-4xl font-semibold ml-5 xl:ml-0">
                            Getoar<span className="text-sky-500">.</span>
                            </h1>                
                           </Link>

                                {/*Desktop */}

                <div className="hidden xl:flex items-center gap-8">
                <Nav/> 
                <Link href='/contact'>
                <Button variant='default'>Hire me</Button>
                </Link>
                </div>

                {/*Mobile */}
                <div className="xl:hidden mr-5 xl:mr-0">
                        <MobileNav/>
                </div>
            </div>
        </header>
    )
}

export default Header