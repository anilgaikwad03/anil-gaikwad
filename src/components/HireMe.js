import React from 'react'
import { CircularText } from './Icons'
import Link from 'next/link'

const HireMe = () => {
  return (
    <div className='absolute left-64 bottom-16 lg:left-12
    flex items-center justify-center overflow-hidden md:right-8 sm:right-0 md:left-auto md:top-0 md:bottom-auto md:absolute lg:absolute
    
    '>

        <div className='w-48 h-auto flex items-center justify-center relative md:w-20'>
            <CircularText className={"fill-transparent animate-spin-slow"} />

            <Link href="mailto:gaikwadanil530@gmail.com"
            className='flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2  text-light shadow-md border border-solid w-24 h-12 rounded-full text-sm font-semibold
            bg-gradient-to-r from-red-500 to-violet-500 hover:from-violet-500 hover:to-red-500
            md:w-14 md:h-14 md:text-[10px]'
            >Hire Me</Link>
        </div>
    </div>
  )
}

export default HireMe