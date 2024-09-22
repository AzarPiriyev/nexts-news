import React from 'react'
import Image from 'next/image'
import logofooter from "@/assets/images/logofooter.svg"
import Container from '@/components/mainContainer'
import facebook from "@/assets/icons/facebook.svg"
import twitter from "@/assets/icons/twitter.svg"



const footer = () => {
  return (
    
    <div className='bg-[#0E1E32] flex justify-between py-[70px] px-[250px]'>
        <div>
            <Image src={logofooter} alt="Logo" className='mb-[30px] ml-[40px]'/>
            <p className='text-[12px] font-regular text-white'>copyright 2020 | NBC NEWS</p>
        </div>
        <div>
            <ul>
                <li className='text-[15px] font-medium text-white cursor-pointer mb-[10px]'>Privacy Policy</li>
                <li className='text-[15px] font-medium text-white cursor-pointer mb-[10px]'>Do not sell my personal info</li>
                <li className='text-[15px] font-medium text-white cursor-pointer mb-[10px]'>Terms of Service</li>
                <li className='text-[15px] font-medium text-white cursor-pointer mb-[10px]'>nbcnews.com Site Map</li>
            </ul>
        </div>
        <div className='flex gap-[20px]'>
        <Image src={facebook} alt="Logo" className='cursor-pointer' />
        <Image src={twitter} alt="Logo" className='cursor-pointer'/>
        </div>
    </div>

  )
}

export default footer