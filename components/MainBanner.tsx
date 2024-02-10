import React from 'react'
import { Card } from "@/components/ui/card"
import Image from 'next/image'
import { RedStar, Ticket, Calender, Clock, People, Plus, PiggyBank, SecureLock } from './icons/icons'
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { Button } from './ui/button'


function MainBanner() {
    return (
        <div>
            <Card className=' rounded-3xl rounded-b-none p-4 mb-0 flex flex-col items-start  justify-around space-y-2'>
                <Image width={500}
                    height={500} src="/gallery1.png"
                    alt="Banner Image"
                    className='max-md:hidden rounded-2xl shadow-none ' />
                <Image width={500}
                    height={500} src="/gallery2.png"
                    alt="Banner Image"
                    className='md:hidden rounded-2xl  shadow-none ' />
                <div className=' flex flex-row space-x-1 '>
                    <RedStar />
                    <p className=' font-semibold text-sm '>4.9</p>
                    <p className=' font-normal text-sm text-grey-600 ' >&#40;4.5k&#41; • &#60;category&#62; </p>

                </div>
                <div>
                    <p className='font-semibold text-lg  mb-4 '>Amsterdam open boat canel cruise - Live Guiyu - from Anne Frank House</p>
                </div>
                <div className='font-semibold text-sm  flex flex-row space-x-2 '>
                    <Ticket />
                    <p> &#60;ticket type - varient&#62;</p>

                </div>
                <div className='font-semibold text-sm flex flex-row space-x-2 '>
                    <Calender />
                    <div>
                        <p> &#60;days&#62;, &#60;month&#62; &#60;date&#62;</p>
                        <p> Duration: &#60;duration&#62;</p>
                    </div>
                </div>
                <div className='font-semibold text-sm flex flex-row space-x-2 '>
                    <Clock />
                    <div>
                        <p> &#60;days&#62;, &#60;month&#62; &#60;date&#62;</p>
                        <p className=' font-normal text-sm text-grey-600 ' > Operating hours: &#60;time&#62; to &#60;time&#62;</p>
                    </div>
                </div>
                
                <div className='font-semibold text-sm flex flex-row space-x-2 '>
                    <People />
                    <p>5 Guests</p>
                </div>
                <Separator />
                <div className='  w-full flex flex-row  justify-between items-center space-x-2 '>
                    <div className=' font-semibold text-gray-600 text-sm underline'>View payment summary</div>
                    <div><Plus /></div>
                </div>

            </Card>
            <Card className='rounded-3xl rounded-t-none p-4 mt-0 flex flex-col items-start  justify-around space-y-2'>
                <div className='  w-full flex flex-row  justify-between items-center space-x-2 '>
                    <div className=' font-semibold text-2xl'>Total Payable</div>
                    <div><p className='font-semibold text-2xl'>$XXX</p></div>
                </div>
                <Badge className=' flex flex-row space-x-2 bg-green-100 text-green-600'>

                    <PiggyBank />
                    <div className='font-semibold text-sm '>You saved &#60;price&#62;</div>

                </Badge>
                <div>
                    <p className=' text-sm font-normal text-gray-600 '>You will be charged in AED &#9432;</p>
                </div>
                <div className='max-md:hidden'>
                    <p className=' text-gray-600 font-normal text-xs'>By clicking &quot;confirm & pay&quot;, you agree to Tickete&apos;s general terms and conditions and cancellation policy.
                    </p>

                </div>
                <Button className=' bg-black max-md:hidden text-xl font-normal py-6 w-full md:px-6 p-4 md:py-6 rounded-xl'><SecureLock /> Confirm & pay  </Button>

            </Card>


        </div>
    )
}

export default MainBanner

