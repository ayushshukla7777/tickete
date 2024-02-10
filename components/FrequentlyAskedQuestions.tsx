import React from 'react'
import { Card } from './ui/card'
import { Plus, Cross, CustomerCare } from './icons/icons'
import { Button } from './ui/button'
import { Separator } from "@/components/ui/separator";


function FrequentlyAskedQuestions() {
  return (
    <div className='flex flex-col space-y-4 mt-8 p-2 md:grid md:grid-cols-5 md:gap-4 '>
      <div className='md:col-start-1 md:col-end-3'>
        <p>Frequently Asked Questions</p>
      </div>
      <div className='md:col-start-1 md:col-end-3'>
        <p>Here are some questions that you might have</p>
      </div>
      <Card className='md:col-start-3 md:col-end-6 border-gray-400 rounded-2xl p-4 my-6 w-full flex flex-row justify-between items-start space-x-2'>

        <div className='flex-none self-start'> <Plus /></div>
        <div className='flex-auto'>
          <p>What should I do on my first trip to Rome?</p>

        </div>
      </Card>

      <Card className='md:col-start-3 md:col-end-6 border-gray-400 rounded-2xl p-4 my-6 w-full flex flex-row justify-between items-start space-x-2'>
        <div className='flex-none self-start'> <Cross /></div>
        <div className='flex-auto'>
          <p>What are some hidden gems to see in Rome?</p>
          Rome is packed with hidden gems. If you love art, don&apos;t miss the Galleria Doria Pamphilj or Palazzo Barberini. The Museo Barracco is a free museum and well worth a quick visit. If you love the ancient stuff, don&apos;t miss the Domus Romana at Palazzo Valentini, the Domus Aurea, and the Baths of Caracalla. For even more hidden gems, take a tour of Trastevere, a fascinating neighborhood full of history and amblance.
        </div>
      </Card>

      <Card className='md:col-start-3 md:col-end-6 border-gray-400 rounded-2xl p-4 my-6 w-full flex flex-row justify-between items-start space-x-2'>
        <div className='flex-none self-start'> <Plus /></div>
        <div className='flex-auto'>
          <p>How much time should I spend in Rome?</p>
        </div>
      </Card>

      <Card className='md:col-start-3 md:col-end-6 border-gray-400 rounded-2xl p-4 my-6 w-full flex flex-row justify-between items-start space-x-2'>
        <div className='flex-none self-start'> <Plus /></div>
        <div className='flex-auto'>
          <p>What food is Rome known for?</p>
        </div>
      </Card>

      <Card className='md:col-start-3 md:col-end-6 border-gray-400 rounded-2xl p-4 my-6 w-full flex flex-row justify-between items-start space-x-2'>
        <div className='flex-none self-start'> <Plus /></div>
        <div className='flex-auto'>
          <p>What is the best way to get around Rome?</p>
        </div>
      </Card>

      <Card className='md:col-start-1 md:col-end-3 rounder-2xl p-4 flex flex-row space-y-2 justify-between items-center'>
        <div>
          <div>Still need help?</div>
          <div>We&apos;re here for you.</div>
          <Button className=' my-2'>Chat with us</Button>
        </div>
        <div>
          <CustomerCare />
        </div>
      </Card>
      <Separator />
    </div>
  )
}

export default FrequentlyAskedQuestions