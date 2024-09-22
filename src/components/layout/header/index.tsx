import React from 'react'
import Container from '@/components/mainContainer'
import Link from 'next/link'
import Image from 'next/image'
import img from "@/assets/images/logonews.png"
import profile from "@/assets/icons/account.svg"
import search from "@/assets/icons/type.svg"
import burger from "@/assets/icons/burger.svg"




const header = () => {
  const navElements =[
    {title: "Home", href: "/"},
    {title: "About", href: "/about"},
    {title: "FAQ", href: "/faq"},
    {title: "Category", href: "/category", 
      subMenu:[
        {title: "World", href: "/category/world"},
        {title: "Sport", href: "/category/sport"},
        
      ]
    },
  ]
  return (<section>
    <Container>
    <div className='flex justify-between py-[10px] mb-[30px]'>
        <div>
        <Image src={img} alt='logo' className=''/>
        </div>

    <div className=''>
     <ul className='flex gap-[30px] text-[16px] font-semibold py-[15px] group'>
      {navElements&&navElements.map((navElements, index) =>(
        <li className='relative ' key ={index} >
          <Link href={navElements.href}>
          {navElements.title}
          </Link>

          {navElements.subMenu && <ul className='hidden group-hover:block absolute  mt-[10px]'>
            {navElements.subMenu.map((subMenu, index) =>
            <li className='border-2 border-[#2A2A2A] bg-white py-[5px] px-[10px]' key={index}>
              <Link href={subMenu.href}>{subMenu.title}</Link>{""}
            </li>)}
            </ul>}
        </li>
      )
      )}
      </ul> 
    </div>

    <div className='flex gap-[20px] py-[10px]'>
    <Image src={profile} alt='logo' className='cursor-pointer'/>
    <Image src={search} alt='logo' className='cursor-pointer'/>
    <Image src={burger} alt='logo' className='cursor-pointer'/>
    </div>
    </div>
    </Container>
    </section>
  )
}

export default header