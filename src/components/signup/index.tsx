import React from 'react'
import Link from 'next/link'

const SignupMain = () => {
  return (
    <div className='flex justify-center my-[50px]'>
        <div className='flex flex-col border-2 pt-[62px] px-[41px] pb-[37px] rounded-[26px]'>
            <h1 className='text-[35px] font-semibold'>Signups</h1>
            <p className='text-[25px] font-normal mb-[45px]'>to get started</p>
            <input type="text" placeholder='Username' className='border-2 py-[22px] pl-[25px] pr-[130px] rounded-[10px] mb-[22px]'/>
            <input type="email" placeholder='itsnaeemanjum@gmail.com' className='border-2 py-[22px] pl-[25px] pr-[130px] rounded-[10px] mb-[22px]'/>
            <input type="password" placeholder='Password' className='py-[22px] pl-[25px] pr-[259px] rounded-[10px] border-2 mb-[31px]' />
            <input type="password" placeholder='Confirm Password' className='py-[22px] pl-[25px] pr-[259px] rounded-[10px] border-2 mb-[31px]' />
            <div className='flex gap-[15px] mb-[29px]'>
                <input type="checkbox" className='h-[21px] w-[21px]'/>
                <p className='text-[15px] font-normal text-[#333333]'>Agree to Our terms and Conditions</p>
            </div>
            <button className='border-2 py-[23px] px-[94px] text-[15px] font-normal text-white bg-[#0016DF] rounded-[10px] mb-[44px]'>Continue</button>
            <Link href={'/login'}><p className='text-[15px] font-normal text-[#333333] cursor-pointer text-center'>Already registered? <span className='font-medium'>Login</span></p></Link>
        </div>
    </div>
  )
}

export default SignupMain