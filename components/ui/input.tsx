import * as React from "react"

import { cn } from "@/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "flex h-[48px] rounded-md border border-black/10 focus:border-sky-500 font-light bg-white px-4 py-5 text-base placeholder:text-black/60 outline-none",
        className
      )}
      {...props}
    />
  )
}

export { Input }
