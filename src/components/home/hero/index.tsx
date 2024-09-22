import Container from '@/components/mainContainer'
import React from 'react'
import Image from 'next/image'
import img1 from "@/assets/images/image1.png"



const heroMain = () => {
  return (
    
        <div className='flex gap-[70px] mb-[50px]'>
            <div className='w-1/2'>
        <Image src={img1} height={300} width={500} alt='logo' className=''/>
            </div>
            <div className='w-1/2  '>
                <p className='text-[14px] font-semibold text-[#C31815] mb-[10px]'>Trending</p>
                <h3 className='text-[32px] font-semibold text-[#2A2A2A] mb-[15px]'>Cake meme reflects coronavirus absurdity in a world where nothing is what it seems</h3>
                <p className='text-[15px] font-regular text-[#2A2A2A] mb-[20px]'>Earlier this month, a viral video depicting hyper-realistic cakes as everyday items had folks on social media double-guessing every other post, and sometimes even their own realities, effectively launching the next meme : “Is this real or is this cake?”</p>
                <div className='flex gap-[30px]'>
                    <p className='text-[13px] font-regular text-[#2A2A2A]'>2 hours ago</p>
                    <p className='text-[13px] font-regular text-[#2A2A2A]'>By Lucy Hiddleston  |  4min read</p>
                </div>
            </div>
        </div>
    
  )
}

export default heroMain