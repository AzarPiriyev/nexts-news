import React from 'react';
import Image from 'next/image';
import Container from '../mainContainer';
import img2 from "@/assets/images/image2.png";

interface IInform {
  id: number;
  title: string;
  description: string;
  author: string;
  date: string;
  image: string;
}

interface IProps {
  details: IInform[];
}

const DetailsMain = ({ details }: IProps) => {
  return (
    <div>
      <Container>
        {details.map((item) => (
          <div key={item.id} className='mb-[60px]'>
            <div key={item.id} className='bg-[#0E1E32] py-[50px]'>
              <h3 className='text-[42px] font-semibold text-center bg-[#0E1E32] text-white'>
                {item.title}
              </h3>
            </div>
            
            <div className='flex justify-center mb-[60px]'>
              <Image src={item.image} width={700} height={300} alt={item.title} className='' />
            </div>
            
            <div>
              <div className='flex gap-[30px] mb-[15px]'>
                <p className='text-[13px] font-regular text-[#2A2A2A]'>{item.date}</p>
                <p className='text-[13px] font-regular text-[#2A2A2A]'>By {item.author} | 4min read</p>
              </div>
              
              <div>
                <p className='text-[18px] font-regular text-[#2A2A2A] mb-[20px]'>
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Container>
    </div>
  );
}

export default DetailsMain;
