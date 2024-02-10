import React from 'react'
import { Card } from "@/components/ui/card"
import Image from 'next/image'
import { RedStar, Ticket, Calender, Clock, People, Plus, PiggyBank } from './icons/icons'
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"


function MainBanner() {
    return (
        <div>
            <Card className=' rounded-3xl rounded-b-none p-4 mb-0 flex flex-col items-start  justify-around space-y-2'>
                <Image width={500}
                    height={500} src="/pexels-bri.jpg"
                    alt="Banner Image"
                    className='rounded-2xl ' />
                <div className=' flex flex-row space-x-1 '>
                    <RedStar />
                    <p>4.9</p>
                    <p>&#40;4.5k&#41; • &#60;category&#62; </p>

                </div>
                <div>
                    <p className=' font-medium mb-4 '>Amsterdam open boat canel cruise - Live Guiyu - from Anne Frank House</p>
                </div>
                <div className='flex flex-row space-x-2 '>
                    <Ticket />
                    <p> &#60;ticket type - varient&#62;</p>

                </div>
                <div className='flex flex-row space-x-2 '>
                    <Calender />
                    <div>
                        <p> &#60;days&#62;, &#60;month&#62; &#60;date&#62;</p>
                        <p> Duration: &#60;duration&#62;</p>
                    </div>
                </div>
                <div className='flex flex-row space-x-2 '>
                    <Clock />
                    <div>
                        <p> &#60;days&#62;, &#60;month&#62; &#60;date&#62;</p>
                        <p> Duration: &#60;duration&#62;</p>
                    </div>
                </div>
                <div className='flex flex-row space-x-2 '>
                    <People />
                    <p>5 Guests</p>
                </div>
                <Separator />
                <div className='  w-full flex flex-row  justify-between items-center space-x-2 '>
                    <div className=' underline'>View payment summary</div>
                    <div><Plus /></div>
                </div>

            </Card>
            <Card className='rounded-3xl rounded-t-none p-4 mt-0 flex flex-col items-start  justify-around space-y-2'>
                <div className='  w-full flex flex-row  justify-between items-center space-x-2 '>
                    <div className=' font-medium'>Total Payable</div>
                    <div><p>$XXX</p></div>
                </div>
                <Badge className=' flex flex-row space-x-2 bg-green-100 text-green-600'>

                    <PiggyBank />
                    <div>You saved &#60;price&#62;</div>

                </Badge>
                <div>
                    <p>You will be charged in AED &#9432;</p>
                </div>
            </Card>
            

        </div>
    )
}

export default MainBanner

