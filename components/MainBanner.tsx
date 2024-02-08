import React from 'react'
import { Card } from "@/components/ui/card"
import Carousel from './Carousel'
function MainBanner() {
    return (
        <>
        <Card className='p-1 m-2'>
            <Carousel />
        </Card>
        </>
    )
}

export default MainBanner