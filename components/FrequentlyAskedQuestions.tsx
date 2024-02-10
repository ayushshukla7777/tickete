import React from 'react'
import { Card } from './ui/card'
import { Plus, Cross, CustomerCare } from './icons/icons'
import { Button } from './ui/button'
import { Separator } from "@/components/ui/separator";


function FrequentlyAskedQuestions() {
  return (

    <div className='flex flex-col space-y-4 mt-8 p-2 md:grid md:grid-cols-5 md:gap-4 '>
      {/* <Separator className='w-full' /> */}
      <div className='md:col-start-1 md:col-end-3 md:row-start-1 flex flex-col space-y-2'>
        <p className='font-semibold text-2xl  md:mt-4'>Frequently Asked Questions</p>
        <p className='font-normal text-sm text-gray-600 md:mt-6'>Here are some questions that you might have</p>
      </div>

      <Card className=' font-semibold text-lg md:col-start-3   md:col-end-6 md:row-start-1 border-gray-400 rounded-2xl p-4 my-6 md:mt-0 w-full flex flex-row justify-between items-start space-x-2'>

        <div className='flex-none self-start '> <Plus /></div>
        <div className='flex-auto'>
          <p >What should I do on my first trip to Rome?</p>

        </div>
      </Card>

      <Card className='font-semibold text-lg md:col-start-3 md:col-end-6 border-gray-400 rounded-2xl p-4 my-6 w-full flex flex-row justify-between items-start space-x-2'>
        <div className='flex-none self-start'> <Cross /></div>
        <div className='flex-auto'>
          <p >What are some hidden gems to see in Rome?</p>
          <p className=' font-semibold text-sm text-gray-600'>
            Rome is packed with hidden gems. If you love art, don&apos;t miss the Galleria Doria Pamphilj or Palazzo Barberini. The Museo Barracco is a free museum and well worth a quick visit. If you love the ancient stuff, don&apos;t miss the Domus Romana at Palazzo Valentini, the Domus Aurea, and the Baths of Caracalla. For even more hidden gems, take a tour of Trastevere, a fascinating neighborhood full of history and amblance.

          </p>
        </div>
      </Card>

      <Card className=' font-semibold text-lg md:col-start-3 md:col-end-6 border-gray-400 rounded-2xl p-4 my-6 w-full flex flex-row justify-between items-start space-x-2'>
        <div className='flex-none self-start'> <Plus /></div>
        <div className='flex-auto'>
          <p>How much time should I spend in Rome?</p>
        </div>
      </Card>

      <Card className='font-semibold text-lg md:col-start-3 md:col-end-6 border-gray-400 rounded-2xl p-4 my-6 w-full flex flex-row justify-between items-start space-x-2'>
        <div className='flex-none self-start'> <Plus /></div>
        <div className='flex-auto'>
          <p>What food is Rome known for?</p>
        </div>
      </Card>

      <Card className='font-semibold text-lg md:col-start-3 md:col-end-6 border-gray-400 rounded-2xl p-4 my-6 w-full flex flex-row justify-between items-start space-x-2'>
        <div className='flex-none self-start'> <Plus /></div>
        <div className='flex-auto'>
          <p>What is the best way to get around Rome?</p>
        </div>
      </Card>

      <Card className=' border-0 bg-gray-50 md:col-start-1 md:col-end-3 md:row-start-2 rounder-2xl p-4 flex flex-row space-y-2 justify-between items-center'>
        <div>
          <div className='font-semibold text-lg '>Still need help?</div>
          <div className='font-semibold text-lg '>We&apos;re here for you.</div>
          <Button className=' font-normal text-lg text-white my-2'>Chat with us</Button>
        </div>
        <div>
          <CustomerCare />
        </div>
      </Card>
      <Separator className='md:hidden' />
    </div>
  )
}

export default FrequentlyAskedQuestions