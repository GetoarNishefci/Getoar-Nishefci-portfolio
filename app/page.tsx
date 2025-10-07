"use client"

import { Photo } from "@/components/photo";
import { Socials } from "@/components/socials";
import { Stats } from "@/components/stats";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

export default function Home() {

   const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/Getoar Nishefci_CV.pdf";
    link.download = "Getoar-Nishefci-CV.pdf";
    link.click();
  };

  return (
  <section className="h-full">
    <div className="container mx-auto h-full">
      <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
        <div className="text-center xl:text-left order-2 xl:order-none">
          <span className="text-xl">Software Developer</span>
          <h1 className="text-[48px] xl:text-[80px] leading-[1.1] font-semibold mb-6">
          {"Hi,I'm"} <br /><span className="text-sky-500">Getoar Nishefci</span>
          </h1>
          <p className="max-w-[500px] mb-9 text-black/80">
            I am a software developer with a passion for building web applications.
          </p>
          <div className="flex flex-col xl:flex-row items-center gap-8">
            <Button variant="outline" size="lg" className="uppercase flex items-center gap-2" onClick={()=>handleDownloadCV()}>
              <span>Download CV</span>
              <FiDownload className="text-xl"/>
            </Button>
            <div className="mb-8 xl:mb-0">
              <Socials containerStyles="flex gap-6" iconStyles="w-9 h-9 border border-sky-500 rounded-full flex justify-center items-center
                items-center text-sky-500 text-base hover:bg-sky-500 hover:text-white hover:transition-all duration-500"  />
              </div>
          </div>
        </div>
        <div className="order-1 xl:order-none mb-8 xl:mb-0">
          <Photo />
        </div>
      </div>
    </div>
    <Stats/>
  </section>
  );
}
