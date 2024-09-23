import DetailsMain from '@/components/details'
import React from 'react'

interface IInform {
  id: number,
  title: string;
  description: string;
  author: string;
  date: string;
  image: string;
}

interface IProps{
  details:IInform[]
}

const DetailsContainer = ({details}:IProps) => {
  return (
    <DetailsMain details = {details}/>
  )
}

export default DetailsContainer