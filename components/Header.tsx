import React from 'react'
import { ArrowLeft, TicketeBlack, QuestionCircle, SecureLock } from './../components/icons/icons'

function Header() {
    return (
        <>
            <div id="mainContainer" className='flex flex-row justify-between items-center p-6 ' >
                <div className='md:hidden'>
                    <ArrowLeft />
                </div>
                <div className='max-md:hidden'>
                    <TicketeBlack />
                </div>

                <div className='flex items-center space-x-2'>
                    <SecureLock />
                    <p>Checkout</p>
                </div>
                <div className='flex items-center space-x-2'>
                    <QuestionCircle />
                    <p className='max-md:hidden'>Help</p>
                </div>
            </div>
            <div className='flex flex-row mb-12 justify-center bg-black text-white p-2 items-center'>
                <p>Holding your tickets for 30:00</p>
            </div>
        </>
    )
}

export default Header
