import React from 'react'
import Image from 'next/image'
import img2 from "@/assets/images/image2.png"
import Link from 'next/link'

interface IInform {
  id: number,
  title: string;
  description: string;
  author: string;
  date: string;
  image: string;
}

interface IProps{
  latest:IInform[]
}

const latestMain = ({latest}:IProps) => {
  return (
    <div className='mb-[60px] '>
        <div className='px-[15px] py-[14px] mb-[20px]'>
            <p className='text-[18px] font-semibold text-[#2A2A2A]'>Latest Stories</p>
            <hr className='w-[40px] h-[2px] border-none bg-[#C31815]'/>
        </div>
        <div className='grid grid-cols-3 gap-y-10 gap-x-5 px-[30px]'>
        {latest.map((item) => (
        <Link href={`/details/${item.id}`}><div className='w-[340px] h-[390px]  border-2 shadow-2xl cursor-pointer '>
        <Image src={item.image} width={340} height={160} alt='logo' className='h-[160px]'/>
        <div className='w-[340px] px-[15px] py-[15px]'>
        <h3 className='text-[18px] font-semibold text-[#2A2A2A] mb-[15px]'>{item.title}</h3>
                <p className='text-[15px] font-regular text-[#2A2A2A] mb-[20px]'>{item.description}</p>
                <div className='flex gap-[30px]'>
                    <p className='text-[13px] font-regular text-[#2A2A2A]'>{item.date}</p>
                    <p className='text-[13px] font-regular text-[#2A2A2A]'>{item.author}</p>
                </div>
        </div>
        </div>
        </Link>
        ))}
        </div>
    </div>
  )
}

export default latestMain