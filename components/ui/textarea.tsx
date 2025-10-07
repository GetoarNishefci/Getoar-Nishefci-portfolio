import * as React from "react"

import { cn } from "@/lib/utils"

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "flex min-h-[80px] w-full rounded-md border border-black/10 bg-white  px-4 py-5 text-base placeholder:text-black/60 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-sky-500 focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50"
,
        className
      )}
      {...props}
    />
  )
}

export { Textarea }
