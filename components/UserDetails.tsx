import React from 'react'
import { Input } from "@/components/ui/input"
import { SelectCountryCode } from '@/components/SelectCountry';
import { Separator } from "@/components/ui/separator";
import { SelectNormal } from '@/components/SelectNormal';
import {Select, SelectTrigger, SelectValue} from "@/components/ui/select"

function UserDetails() {
  const redAsteriskStyle = {
    color: 'red',
    content: '*'
  };
  return (
    <>
      <div className='flex flex-col space-y-4 p-2 '>
        <p>Enter your details</p>
        <p>We&#39;ll be sending your tickets to the details below. Booking for a friend? Add their details.</p>
        <div className='flex flex-col space-y-4'>
          <Input type="text" className='py-5' placeholder="Name *" required />
          <SelectCountryCode />
          <Input type="tel" className='py-5' placeholder="Phone Number *" required />
          <Input type="email" className='py-5' placeholder="Email *" required />
          <Input type="email" className='py-5' placeholder="Confirm Email *" required />
        </div>
      </div>
      <Separator />


      <div className='flex flex-col space-y-4 p-2 '>
        <p>Additional Information</p>
        <p>We need a few more details to complete your reservation.</p>
        <div className='flex flex-col space-y-4'>
          <Input type="text" className='py-5' placeholder="Input Label *" required />
          <SelectNormal />
          <Select>
            <SelectTrigger className="p-2">
              <SelectValue placeholder="Multiselect * " />
            </SelectTrigger>
          </Select>
        </div>
      </div>
      <Separator />
      
    </>
  )
}

export default UserDetails