import React from 'react'
import { Input } from "@/components/ui/input"
import { SelectCountryCode } from '@/components/SelectCountry';
import { Separator } from "@/components/ui/separator";
import { SelectNormal } from '@/components/SelectNormal';
import { Select, SelectTrigger, SelectValue } from "@/components/ui/select"

function UserDetails() {
  const redAsteriskStyle = {
    color: 'red',
    content: '*'
  };
  return (
    <>
      <div className='flex flex-col space-y-4 p-2 '>
        <p className=' text-2xl font-semibold '>Enter your details</p>
        <p className=' font-grey-600 text-base font-normal '>We&#39;ll be sending your tickets to the details below. Booking for a friend? Add their details.</p>
        <div className='font-grey-600  text-base font-normal flex flex-col space-y-4 md:space-y-0'>
          <Input type="text" className='py-5 md:flex-grow text-base font-normal' placeholder="Name *" required />
          <div className='flex flex-col space-y-4 md:pt-4 md:pb-0 md:flex-row md:space-y-0 md:space-x-2'>
            <div className='md:w-1/2'>
              <SelectCountryCode /></div>
            <Input type="tel" className='py-5 md:w-1/2 ' placeholder="Phone Number *" required />
          </div>
          <div className='flex flex-col md:py-4 space-y-4 md:flex-row md:space-y-0 md:space-x-2'>
            <Input type="email" className='py-5 md:w-1/2' placeholder="Email *" required />
            <Input type="email" className='py-5 md:w-1/2' placeholder="Confirm Email *" required />
          </div>
        </div>
      </div>
      <div className='mt-2 mb-8'>
        <Separator />

      </div>


      <div className='flex flex-col space-y-4 p-2 '>
        <p className=' text-2xl font-semibold '>Additional Information</p>
        <p className='font-grey-600 text-base font-normal '>We need a few more details to complete your reservation.</p>
        <div className='flex flex-col space-y-4 font-grey-600  text-base font-normal'>
          <div className='flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-2'>
            <Input type="text" className='py-5' placeholder="Input Label *" required />
            <SelectNormal />

          </div>

          <Select>
            <SelectTrigger className="p-2 text-gray-600">
              <SelectValue placeholder="Multiselect * " />
            </SelectTrigger>
          </Select>
        </div>
      </div>
      <div className=' text-black bg-black md:hidden  mt-2 mb-8'>
        <Separator />
      </div>
    </>
  )
}

export default UserDetails



