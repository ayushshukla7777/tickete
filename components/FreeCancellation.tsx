import React from 'react'
import { Card } from './ui/card'
import { Information } from './icons/icons'

function FreeCancellation() {
  return (
    <>
      <Card className='bg-slate-50 border-gray-400 rounded-2xl p-4 my-6 flex flex-col justify-evenly items-start space-y-1'>
        <div className='w-full flex flex-row justify-between items-center'>
          <div>
            <p className=' text-sm font-semibold '>Free Cancellation</p>
          </div>
          <Information />
        </div>
        <p className='font-grey-600 text-sm font-normal w-2/3'>
          Tickets can be cancelled by 13th December, 2022
        </p>
      </Card>
    </>
  )
}


export default FreeCancellation

