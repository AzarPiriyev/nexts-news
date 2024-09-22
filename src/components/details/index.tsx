import React from 'react'
import Image from 'next/image'
import Container from '../mainContainer'
import img2 from "@/assets/images/image2.png"


const DetailsMain = () => {
  return (
    <div>
        <div className='bg-[#0E1E32] py-[50px] mb-[60px]'>
            <h3 className='text-[42px] font-semibold text-center bg-[#0E1E32] text-white'>Tornado and tide warnings as Storm Hanna lashes Texas</h3>
        </div>
        <Container>
        <div className='flex justify-center mb-[60px]'>
        <Image src={img2} width={700} height={300} alt='logo' className=''/>
        </div>
        <div>
            <div>
            <div className='flex gap-[30px] mb-[15px]'>
                    <p className='text-[13px] font-regular text-[#2A2A2A]'>5 hours ago</p>
                    <p className='text-[13px] font-regular text-[#2A2A2A]'>By Lucy Hiddleston  |  4min read</p>
                </div>
            </div>
            <div>
            <p className='text-[18px] font-regular text-[#2A2A2A] mb-[20px]'>The body of the late US Rep. John Lewis on Sunday will make the final journey across the famous bridge in Selma, Alabama, where he helped lead a march for voting rights in 1965.</p>
            </div>
        </div>
        </Container>
    </div>
  )
}

export default DetailsMain