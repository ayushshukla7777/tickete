import React from 'react'
import { Card } from './ui/card'
import { CreditCard, StopCircle, VisaCard, MasterCard, DinersCard } from '@/components/icons/icons'
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { PiggyBankWhite, PiggyBank, Information, InformationOutline, SecureLock, GooglePay, ApplePay } from './icons/icons'
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator";

function Payment() {
  return (
    <div className='flex flex-col p-2 space-y-4'>
      <p>Select your mode of payment</p>
      <p>Payments with Tickete are secure and encrypted.</p>
      <Card className=' border-2 border-gray-400 rounded-2xl p-4 my-6 flex flex-col justify-evenly items-center space-y-4'>
        <div className='flex flex-row w-full justify-between items-center'>
          <div className='flex flex-row items-center space-y-1 '>
            <Badge className='px-0.5 rounded-md' variant="outline"><CreditCard /></Badge>
            <div className='pl-2'>
              <p >Credit &amp; Debit card</p>
            </div>
          </div>
          <StopCircle />
        </div>
        <div className=' w-full flex flex-row justify-start space-x-2 items-center'>
          <Badge className='px-0.5 rounded-md' variant="outline"><VisaCard /></Badge>
          <Badge className='px-0.5 rounded-md' variant="outline"><MasterCard /></Badge>
          <Badge className='px-0.5 rounded-md' variant="outline"><DinersCard /></Badge>

        </div>
        <div className='flex w-full flex-col space-y-4'>
          <Input className='w-full' type="text" placeholder="Name on Card *" required />
          <Input className='w-full' type="number" placeholder="Card Number *" required />
          <Input className='w-full' type="date" placeholder="Email *" required />
          <Input className='w-full' type="number" placeholder="&lt;CVV/CVC&gt; *" required />
        </div>
        <div className='self-start'>
          <Badge className='self-start flex flex-row space-x-2 text-green-100 bg-green-600'>
            <PiggyBankWhite />
            <div>You saved &lt;price&gt;</div>
          </Badge>
        </div>
        <div className=' font-bold self-start w-full'> Total payable:$XXX</div>
        <div className='flex flex-row items-center space-y-1 text-sm  self-start w-full'>Your card will be charged in AED  <InformationOutline /></div>
        <div className=' text-sm  self-start w-full'>
          <p>By clicking &quot;confirm & pay&quot;, you agree to Tickete&apos;s general terms and conditions and cancellation policy.
          </p>

        </div>
        <Button className='w-full p-4 '><SecureLock /> Confirm & pay  </Button>

      </Card>
      <Card className='bg-slate-200 border-gray-400 rounded-2xl p-4 my-6 flex flex-col justify-evenly items-start space-y-1'>
        <div className='w-full flex flex-row justify-between items-center'>
          <div className='flex flex-row space-x-1 items-center'>
            <Badge className='rounded-md' variant="outline"><ApplePay /></Badge>
            <p>Coming Soon</p>
          </div>
          <div>
            <div className=' bg-slate-400 rounded-full w-6 h-6 top-1 left-1'></div>
          </div>
        </div>

      </Card>
      <Card className='bg-slate-200 border-gray-400 rounded-2xl p-4 my-6 flex flex-col justify-evenly items-start space-y-1'>
        <div className='w-full flex flex-row justify-between items-center'>
          <div className='flex flex-row space-x-1 items-center'>
            <Badge className='rounded-md' variant="outline"><GooglePay /></Badge>
            <p>Coming Soon</p>
          </div>
          <div>
            
            <div className=' bg-slate-400 rounded-full w-6 h-6 top-1 left-1'></div>
            
          </div>
        </div>

      </Card>
      <Separator className='mb-8' />
      <div className='self-start'>
        <Badge className='self-start flex flex-row space-x-2 bg-green-100 text-green-600'>
          <PiggyBank />
          <div>You saved &lt;price&gt;</div>
        </Badge>
      </div>
      <div>
        <div className=' font-bold self-start w-full'> Total payable:$XXX</div>
      </div>
      <Card className='rounded-2xl p-4 my-6 w-full flex flex-row justify-between items-start space-x-2'>
        
          <div className='flex-none self-start'> <Information /></div>
          <div className='flex-auto'>
            <p>You will be charged in AED</p>
            <p>The price shown here is in US Dollar (USD) as per the current conversion rate. You will be charged in United Arab Emirates Dirham (AED).</p>
          
          
        </div>
      </Card>
      <Separator />
    </div>
  )
}

export default Payment