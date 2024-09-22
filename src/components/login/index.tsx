import React from 'react'
import Link from 'next/link'

const LoginMain = () => {
  return (
    <div className='flex justify-center my-[50px]'>
        <div className='flex flex-col border-2 pt-[62px] px-[41px] pb-[37px] rounded-[26px]'>
            <h1 className='text-[35px] font-semibold'>Login</h1>
            <p className='text-[25px] font-normal mb-[45px]'>to get started</p>
            <input type="email" placeholder='itsnaeemanjum@gmail.com' className='border-2 py-[22px] pl-[25px] pr-[130px] rounded-[10px] mb-[22px]'/>
            <input type="password" placeholder='Password' className='py-[22px] pl-[25px] pr-[259px] rounded-[10px] border-2 mb-[31px]' />
            <p className='text-[15px] font-normal text-[#333333] cursor-pointer mb-[45px]'>Forgot Password?</p>
            <button className='border-2 py-[23px] px-[94px] text-[15px] font-normal text-white bg-[#0016DF] rounded-[10px] mb-[44px]'>Continue</button>
            <Link href={'/signup'}><p className='text-[15px] font-normal text-[#333333] cursor-pointer text-center'>New User? <span className='font-medium'>Register</span></p></Link>
        </div>
    </div>
  )
}

export default LoginMain