"use client"
    import  CountUp  from "react-countup"

 const stats = [
    {
        num:3,
        label:"Years of Experience"
    }
    ,{
        num:4,
        label:"Projects Completed"
    }
    ,{
        num:11,
        label:"Technologies I Work With"
    }
]

export const Stats = () => {
    return(
        <section>
            <div className="container mx-auto">
                <div className="flex flex-wrap gap-6 max-w-[80vm] mx-auto xl:max-w-none">
                    {stats.map((stat,index)=>{
                        return(
                            <div key={index} className="flex-1 flex gap-4 items-center justify-center xl:justify-self-center">
                                <CountUp 
                                    end={stat.num}
                                    duration={5}
                                    delay={2}
                                    className="text-4xl xl:text-6xl font-extrabold"
                                />
                                <p className={`${stat.label.length < 15 ? "max-w-[100px]" : "max-w-[150px]"} leading-snug text-black/80`}>
                                    {stat.label}
                                </p>
                                </div>
                        )
                    })
                    }
                </div>
            </div>
        </section>
    )
}