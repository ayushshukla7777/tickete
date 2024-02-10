import React from 'react'
import { Separator } from "@/components/ui/separator";
import { Tickete } from '@/components/icons/icons'

function Footer() {
  return (
    <div className=' text-white bg-black flex flex-col space-y-4 pt-16 px-2 pb-8 '>
      <div>
        <Tickete />
      </div>
      <Separator />
      <ul className=" flex flex-row flex-wrap list-disc list-inside p-2">
        <li className="mr-2 list-none">Privacy policy</li>
        <li className="mr-2">Terms of use</li>
        <li className="mr-2">Cancellation policy</li>
        <li className="mr-2">Sitemap</li>
      </ul>
      <div>
        Made with ❤️
      </div>
    </div>
  )
}

export default Footer